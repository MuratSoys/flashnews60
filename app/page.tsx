export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="mb-10">
          <div className="text-7xl mb-6">⚡</div>
          <h1 className="text-5xl font-bold text-white mb-4">FlashNews60</h1>
          <p className="text-xl text-zinc-400">İzmir Demo</p>
        </div>

        <button className="bg-white text-black font-semibold text-2xl px-16 py-7 rounded-3xl hover:bg-zinc-200">
          Haberlere Git
        </button>

        <p className="mt-12 text-zinc-500 text-sm">
          Sadece yayınlanmış haberlere link veriyoruz
        </p>
      </div>
    </div>
  );
}
