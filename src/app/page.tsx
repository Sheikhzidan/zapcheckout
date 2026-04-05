'use client';

import { useState } from "react";

export default function Home() {
const [loading, setLoading] = useState(false);
const [result, setResult] = useState<any>(null);

const runTransfer = async () => {
setLoading(true);
setResult(null);
try {
const res = await fetch("/api/test-transfer", { method: "POST" });
const data = await res.json();
setResult(data);
} catch (e: any) {
setResult({ ok: false, error: e?.message || "Request failed" });
} finally {
setLoading(false);
}
};

return (
<main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
<div className="max-w-2xl w-full rounded-2xl border border-zinc-700 p-8 bg-zinc-900">
<h1 className="text-3xl font-bold mb-3">ZapCheckout ⚡️</h1>
<p className="text-zinc-300 mb-6">
Starkzap Builder Demo — one-click Sepolia transfer
</p>

<button
onClick={runTransfer}
disabled={loading}
className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-3 font-semibold transition disabled:opacity-50"
>
{loading ? "Processing..." : "Run Starkzap Transfer"}
</button>

{result && (
<pre className="mt-6 p-4 rounded-xl bg-zinc-950 border border-zinc-700 text-xs overflow-auto">
{JSON.stringify(result, null, 2)}
</pre>
)}
</div>
</main>
);
}
