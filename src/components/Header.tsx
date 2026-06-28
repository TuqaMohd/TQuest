import type { Tab } from "../types";
import Navbar from "./Navbar";

interface HeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="text-center mb-6">
      <h1 className="text-3xl font-bold text-goldBright">JavaScript vs TypeScript - Dashboard</h1>
      <p className="text-parchmentDark mt-1 mb-5">
        Welcome to Tuqa's quest where you will explore the difference between JavaScript and TypeScript
      </p>
      <Navbar activeTab={activeTab} onTabChange={onTabChange} />
    </header>
  );
}
