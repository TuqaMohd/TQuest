import type { Tab } from "../types";

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const linkClasses = (active: boolean) =>
  "px-5 py-2 rounded border-2 border-gold inline-block " +
  (active ? "bg-gold text-ink" : "bg-emeraldDark text-parchment");

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <nav className="flex justify-center gap-3">
      <button onClick={() => onTabChange("dashboard")} className={linkClasses(activeTab === "dashboard")}>
        Dashboard
      </button>
      {/* Real navigation to the standalone quest page, not just a tab swap */}
      <a href="/quest/" className={linkClasses(activeTab === "game")}>
        Official Quest
      </a>
    </nav>
  );
}
