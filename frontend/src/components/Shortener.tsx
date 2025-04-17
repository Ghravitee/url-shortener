import React, { useState } from "react";

const Shortener = () => {
  const [input, setInput] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<
    { original: string; short: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasCopied, setHasCopied] = useState(false);

  const shortenLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      // Prevent empty links
      setError("Please add a link");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send the link to the backend
      const response = await fetch(
        "https://url-shortener-jhqd.onrender.com/shorten-url",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: input }),
        }
      );

      if (!response.ok) throw new Error("Failed to shorten the link");

      const data = await response.json();
      setShortenedLinks([
        { original: input, short: data.result_url },
        ...shortenedLinks,
      ]);
      setInput("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <>
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

        {error && <p className="text-Red mt-2 italic">{error}</p>}
      </div>

      {/* Display shortened links */}
      <div className="mt-6 space-y-4 -translate-y-36 lg:-translate-y-40">
        {shortenedLinks.map(({ original, short }, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between bg-white lg:p-4 p-0 rounded-lg"
          >
            <p className="text-Dark-Violet font-semibold lg:truncate max-w-[60%] px-4 pb-2 pt-4 md:py-0">
              {original}
            </p>
            <div className="my-4 lg:hidden bg-Gray h-[1px] " />
            <div className="flex flex-col md:flex-row gap-4 md:items-center px-4 py-4">
              <a
                href={short}
                target="_blank"
                rel="noopener noreferrer"
                className="text-Cyan font-semibold"
              >
                {short}
              </a>
              <button
                onClick={() => handleCopy(short)}
                className={`${
                  hasCopied ? "bg-Dark-Violet" : "bg-Cyan"
                } text-white px-4 py-3 rounded-lg cursor-pointer hover:opacity-50 w-full font-semibold`}
              >
                {hasCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shortener;
