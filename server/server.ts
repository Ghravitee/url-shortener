import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/shorten", async (req, res) => {
  try {
    const { url } = req.body;
    const response = await axios.post(
      "https://cleanuri.com/api/v1/shorten",
      new URLSearchParams({ url }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to shorten the URL" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
