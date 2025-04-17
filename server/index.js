// index.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://url-shortener-orpin-eta.vercel.app",
    ],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/shorten-url", async (req, res) => {
  const { url } = req.body;
  try {
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      body: new URLSearchParams({ url }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to shorten URL" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
