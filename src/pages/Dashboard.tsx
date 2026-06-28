import { useState } from "react";
import { comparisons } from "../data";

export default function Dashboard() {
  const [activeId, setActiveId] = useState(comparisons[0].id);
  const active = comparisons.find((c) => c.id === activeId)!;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-emeraldDark mb-2">JavaScript vs TypeScript</h2>
        <p className="text-ink">
          TypeScript is JavaScript with types added. Click the buttons below to see
          a few of the main differences between the two.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {comparisons.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={
              "px-4 py-2 rounded-full border text-sm " +
              (c.id === activeId
                ? "bg-emerald text-parchment border-emeraldDark"
                : "bg-parchmentDark border-gold text-ink")
            }
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="bg-white border border-parchmentDark rounded-lg p-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-ink rounded-lg p-4">
            <span className="inline-block text-xs font-semibold px-2 py-1 rounded mb-2 bg-goldBright text-ink">
              JavaScript
            </span>
            <pre className="text-parchment text-sm whitespace-pre-wrap font-mono">{active.js}</pre>
          </div>
          <div className="bg-ink rounded-lg p-4">
            <span className="inline-block text-xs font-semibold px-2 py-1 rounded mb-2 bg-runeBlue text-white">
              TypeScript
            </span>
            <pre className="text-parchment text-sm whitespace-pre-wrap font-mono">{active.ts}</pre>
          </div>
        </div>
        <p className="mt-4 border-l-4 border-gold pl-3 text-ink">{active.note}</p>
      </div>
    </div>
  );
}
