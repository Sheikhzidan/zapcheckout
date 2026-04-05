export default function Home() {
return (
<main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
<div className="max-w-xl w-full rounded-2xl border border-zinc-700 p-8 bg-zinc-900">
<h1 className="text-3xl font-bold mb-3">ZapCheckout ⚡️</h1>
<p className="text-zinc-300 mb-6">
Starkzap Builder Demo (Phase-1 setup done)
</p>

<div className="space-y-3 text-sm text-zinc-200">
<p>✅ Next.js app running</p>
<p>✅ starkzap package installed</p>
<p>🔜 Next: wallet connect + gasless checkout</p>
</div>
</div>
</main>
);
}
