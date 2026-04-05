import { NextResponse } from "next/server";
import { StarkZap, StarkSigner, Amount, fromAddress, getPresets } from "starkzap";

export async function POST() {
let senderAddress = "";

try {
const privateKey = process.env.STARK_PRIVATE_KEY;
const recipient = process.env.STARK_RECIPIENT;

if (!privateKey || !recipient) {
return NextResponse.json(
{
ok: false,
error: "Missing STARK_PRIVATE_KEY or STARK_RECIPIENT in .env.local",
},
{ status: 400 }
);
}

const sdk = new StarkZap({ network: "sepolia" });

const wallet = await sdk.connectWallet({
account: { signer: new StarkSigner(privateKey) },
});

senderAddress = wallet.address.toString();
console.log("SENDER_WALLET:", senderAddress);

await wallet.ensureReady({ deploy: "if_needed" });

const STRK = getPresets(wallet.getChainId()).STRK;
const balance = await wallet.balanceOf(STRK);

// Insufficient balance হলে sender address return করব
if (balance.isZero() || !balance.gte(Amount.parse("1", STRK))) {
return NextResponse.json(
{
ok: false,
error: "Insufficient STRK balance on Sepolia. Fund this sender wallet from faucet.",
walletAddress: senderAddress,
faucet: "https://starknet-faucet.vercel.app/",
balance: balance.toFormatted(),
},
{ status: 400 }
);
}

const tx = await wallet.transfer(STRK, [
{ to: fromAddress(recipient), amount: Amount.parse("1", STRK) },
]);

return NextResponse.json({
ok: true,
walletAddress: senderAddress,
txHash: tx.hash,
explorerUrl: tx.explorerUrl,
});
} catch (err: any) {
return NextResponse.json(
{
ok: false,
error: err?.message || "Unknown error",
walletAddress: senderAddress || "not-created-yet",
},
{ status: 500 }
);
}
}
