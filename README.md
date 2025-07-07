# 🚀 Upscale

**Upscale** is a Web3-powered learning and hiring platform that certifies skills, recommends personalized courses, and rewards users using NEAR smart contracts.

This is the frontend repo built with **Next.js**, **TailwindCSS**, and integrates with smart contracts on the **NEAR testnet**.

---

## 📄 Project Pitch (Notion)

For a full breakdown of our vision, use cases, token model, and demo plans:

👉 [View Notion Pitch Document](https://www.notion.so/Upscale-Project-Pitch-Pre-Document-Overview-Presented-by-the-Upscale-Team-22408492f17280feb0fefe7b846640ed)

## ✨ Core Features

- 🧠 **AI Skill Assessment:** Users chat with an AI agent that determines their experience level.
- 📚 **Personalized Course Enrollment:** Based on AI analysis, users are enrolled in beginner, intermediate, or advanced tracks.
- 🎯 **Section-Based Testing:** Each course section ends with an AI-generated test.
- 🏆 **Rewards System:** Passing tests earns users NEAR tokens (later our native token $UPSK).
- ⚖️ **Rebalancer Bot:** Automatically stakes or converts rewards for users based on rules.

---

## 📁 Project Structure

🔹 This project is organized into 3 separate repositories under the [`UpscaleHub`](https://github.com/UpscaleHub) GitHub organization:

| Repo        | Description                                      |
|-------------|--------------------------------------------------|
| [`frontend`](https://github.com/UpscaleHub/frontend) | Main web interface (this repo) |
| [`contract`](https://github.com/UpscaleHub/contract)  | Smart contracts written in `near-sdk-js` |

---

## 🛠 Tech Stack

- **Frontend:** Next.js, TailwindCSS, ShadCN
- **Smart Contract:** NEAR (JavaScript SDK)
- **Backend:** Node.js (Express)
- **Wallets:** NEAR Wallet (testnet)

---

---

## 🤖 AI Onboarding Agent (Powered by NEAR AI)

The AI onboarding agent is **powered by NEAR AI** and currently runs as a separate interface. It evaluates a user's skills through conversation and determines their learning path (e.g., beginner, intermediate, advanced).

🔗 **Test the AI Agent:** [`https://app.near.ai/agents/upscalehub.near/UpscaleHub-Mentor/latest/run`](https://app.near.ai/agents/upscalehub.near/UpscaleHub-Mentor/latest/run)

🧠 The results will later be stored via smart contract calls and used to enroll users in tailored courses — integration in progress.

---

## 📦 Getting Started with Frontend Repo

```bash
git clone https://github.com/UpscaleHub/frontend
cd frontend
npm install
npm run dev
```
---

## 📜 Running Smart Contracts
The smart contracts are in the [`contract repository`](https://github.com/UpscaleHub/contract), written using near-sdk-js and deployed on the NEAR testnet.
To build, deploy, or test the smart contracts, please follow the instructions provided in the contract README.
