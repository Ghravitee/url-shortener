import React, { useState } from "react";

const Shortener = () => {
  const [input, setInput] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<
    { original: string; short: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shortenLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: input }),
      });

      if (!response.ok) throw new Error("Failed to shorten the link");

      const data = await response.json();
      setShortenedLinks([
        { original: input, short: data.result_url },
        ...shortenedLinks,
      ]);
      setInput("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="shortener-background lg:p-12 py-6 px-6 lg:px-12 rounded-lg mx-auto -translate-y-36 lg:-translate-y-40 w-full">
      <form
        onSubmit={shortenLink}
        className="flex gap-4 justify-center lg:justify-between flex-col md:flex-row"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="md:w-[65%] lg:w-[75%] w-full rounded-lg bg-white h-full py-3 px-4 placeholder:text-Gray"
          placeholder="Shorten a link here..."
        />
        <button
          type="submit"
          className="px-4 py-3 flex items-center justify-center md:w-[25%] lg:w-[25%] bg-Cyan rounded-lg text-white cursor-pointer"
          disabled={loading}
        >
          {loading ? "Shortening..." : "Shorten it!"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Display shortened links */}
      <div className="mt-6 space-y-2">
        {shortenedLinks.map(({ original, short }, index) => (
          <div
            key={index}
            className="flex justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <p className="text-gray-600 truncate max-w-[60%]">{original}</p>
            <div className="flex gap-4 items-center">
              <a
                href={short}
                target="_blank"
                rel="noopener noreferrer"
                className="text-Cyan font-semibold"
              >
                {short}
              </a>
              <button
                onClick={() => copyToClipboard(short)}
                className="bg-Cyan text-white px-3 py-1 rounded-lg"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shortener;
