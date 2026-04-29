require("dotenv").config();

const express = require("express");
const axios = require("axios");
const OpenAI = require("openai");

const app = express();
const PORT = 3000;

app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.send("AI GitHub Repo Explainer is running");
});

app.post("/explain", async (req, res) => {
  try {
    const { repoUrl } = req.body;

    const repoPath = repoUrl.split("github.com/")[1];
    const [owner, repo] = repoPath.split("/");

    const readmeResponse = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3.raw"
        }
      }
    );

    const readmeText = readmeResponse.data.slice(0, 4000);

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a senior software engineer. Explain GitHub repositories clearly for beginner developers."
        },
        {
          role: "user",
          content: `
Analyze this GitHub project.

Return STRICTLY in this format:

1. Project Overview (2-3 lines)
2. Tech Stack (bullet points)
3. Architecture (simple explanation)
4. Key Features (bullet points)
5. How to explain in interview (short paragraph)
README:
${readmeText}
`
        }
      ]
    });

    res.json({
      repo: repoUrl,
      explanation: aiResponse.choices[0].message.content
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Failed to explain repository"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});