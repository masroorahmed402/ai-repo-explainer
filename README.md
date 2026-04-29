# AI GitHub Repo Explainer

An AI-powered backend tool that analyzes GitHub repositories and generates structured explanations including architecture, tech stack, key features, and interview-ready summaries.

## 🚀 Features

- Accepts a GitHub repository URL  
- Fetches README content using GitHub API  
- Uses AI to generate:
  - Project overview  
  - Tech stack  
  - Architecture breakdown  
  - Key features  
  - Interview-ready explanation  
- Fast and optimized responses  

## 🧠 Tech Stack

- Node.js (Express)  
- OpenAI API  
- Axios  
- dotenv  

## ⚙️ How to Run

1. Clone the repository:
```bash
git clone https://github.com/masroorahmed402/ai-repo-explainer.git
cd ai-repo-explainer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```text
OPENAI_API_KEY=your_api_key_here
```

4. Start the server:
```bash
node server.js
```

## 📡 API Usage

**Endpoint:**
```
POST /explain
```

**Example:**
```bash
curl -X POST http://localhost:3000/explain \
-H "Content-Type: application/json" \
-d '{"repoUrl":"https://github.com/expressjs/express"}'
```

## 🧠 How It Works

1. User provides a GitHub repository URL  
2. Backend fetches README from GitHub API  
3. Content is sent to OpenAI  
4. AI generates structured explanation  
5. Response is returned  

## 🎯 Use Cases

- Understand unfamiliar repositories quickly  
- Prepare for technical interviews  
- Learn architecture of real-world projects  

## 🔐 Note

You must provide your own OpenAI API key in the `.env` file.

## 👨‍💻 Author

Mohammed Masroor Ahmed
