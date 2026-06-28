import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a3a30] to-[#11201a]">
      <div className="max-w-4xl mx-auto px-5 py-8">
        <Header activeTab="dashboard" onTabChange={() => {}} />

        <main className="bg-parchment border-2 border-gold rounded-lg p-6 shadow-xl">
          <Dashboard />
        </main>

        <Footer />
      </div>
    </div>
  );
}
