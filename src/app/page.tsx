'use client';

export default function Home() {
return (
<main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
<div className="max-w-xl w-full rounded-2xl border border-zinc-700 p-8 bg-zinc-900">
<h1 className="text-3xl font-bold mb-3">ZapCheckout ⚡️</h1>
<p className="text-zinc-300 mb-6">
Starkzap Builder Demo — Phase 2 (UI + flow ready)
</p>

<div className="space-y-3 text-sm text-zinc-200 mb-6">
<p>✅ Live deployed on Vercel</p>
<p>✅ Project + GitHub setup done</p>
<p>🔜 Next: Starkzap wallet + gasless integration</p>
</div>

<button
className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-3 font-semibold transition"
onClick={() => alert('Next step: Starkzap connect flow')}
>
Continue Setup
</button>
</div>
</main>
);
}
