# 🚀 Upscale

**Upscale** is a Web3-powered learning and hiring platform that certifies skills, recommends personalized courses, and rewards users using NEAR smart contracts.

This is the frontend repo built with **Next.js**, **TailwindCSS**, and integrates with smart contracts on the **NEAR testnet**.

---

## 📁 Project Structure

🔹 This project is organized into 3 separate repositories under the [`UpscaleHub`](https://github.com/UpscaleHub) GitHub organization:

| Repo        | Description                                      |
|-------------|--------------------------------------------------|
| [`frontend`](https://github.com/UpscaleHub/frontend) | Main web interface (this repo) |
| [`contract`](https://github.com/UpscaleHub/contract)  | Smart contracts written in `near-sdk-js` |
| [`backend`](https://github.com/UpscaleHub/backend)    | Node.js API for AI scoring, auth, and data logic |

---

## 🛠 Tech Stack

- **Frontend:** Next.js, TailwindCSS, ShadCN
- **Smart Contract:** NEAR (JavaScript SDK)
- **Backend:** Node.js (Express)
- **Wallets:** NEAR Wallet (testnet)

---

## 📦 Getting Started with Frontend Repo

```bash
git clone https://github.com/UpscaleHub/frontend
cd frontend
npm install
npm run dev
```

## 📜 Running Smart Contracts
The smart contracts are in the [`contract repository`](https://github.com/UpscaleHub/contract), written using near-sdk-js and deployed on the NEAR testnet.
To build, deploy, or test the smart contracts, please follow the instructions provided in the contract README.
