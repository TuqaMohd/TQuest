import Footer from "./components/Footer";
import Game from "./pages/Game";

export default function QuestApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a3a30] to-[#11201a]">
      <div className="max-w-4xl mx-auto px-5 py-8">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-goldBright">JavaScript vs TypeScript - Official Quest</h1>
          <p className="text-parchmentDark mt-1 mb-5">
            Now apply what you've learned in the quest. Complete all 3 levels to earn a medal.
          </p>
          <nav className="flex justify-center gap-3">
            <a
              href="/"
              className="px-5 py-2 rounded border-2 border-gold inline-block bg-emeraldDark text-parchment"
            >
              Dashboard
            </a>
            <span className="px-5 py-2 rounded border-2 border-gold inline-block bg-gold text-ink">
              Official Quest
            </span>
          </nav>
        </header>

        <main className="bg-parchment border-2 border-gold rounded-lg p-6 shadow-xl">
          <Game />
        </main>

        <Footer />
      </div>
    </div>
  );
}
