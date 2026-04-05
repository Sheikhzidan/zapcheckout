# ZapCheckout ⚡️

ZapCheckout is a simple Starkzap SDK demo on Starknet Sepolia.

## What it does

- One-click transfer flow from UI
- Backend API route executes Starkzap wallet transfer
- Returns live JSON result: `ok`, `walletAddress`, `txHash`, `explorerUrl`

## Live Demo

https://zapcheckout-gamma.vercel.app/

## GitHub

https://github.com/Sheikhzidan/zapcheckout

## Build in Public (X)

https://x.com/antlion_pidytn/status/2040793909622694008?s=20

## Tech Stack

- Next.js
- Starkzap SDK
- Starknet Sepolia

## Local Setup

```bash
npm install
npm run dev

Create .env.local in project root:

STARK_PRIVATE_KEY=0xYOUR_BURNER_PRIVATE_KEY
STARK_RECIPIENT=0xRECIPIENT_ADDRESS

API Route

• POST /api/test-transfer
• Executes a Sepolia STRK transfer via Starkzap

Notes

• Use burner keys only for demo/testing
• Never expose private keys in screenshots or public repos
