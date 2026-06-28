import { useState } from "react";
import { trialLevels } from "../data";
import type { LevelStatus } from "../types";

export default function Game() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [cleared, setCleared] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);
  const [claimed, setClaimed] = useState(false);

  const level = trialLevels.find((l) => l.id === currentLevel)!;
  const allCleared = claimed && cleared.length === trialLevels.length;

  function statusFor(id: number): LevelStatus {
    if (cleared.includes(id)) return "cleared";
    if (id === currentLevel) return "available";
    if (id < currentLevel) return "cleared";
    return "locked";
  }

  function pickOption(optionId: string) {
    if (wasCorrect) return;
    const option = level.options.find((o) => o.id === optionId)!;
    setSelectedOption(optionId);
    setFeedback(option.feedback);
    setWasCorrect(option.correct);
    if (option.correct && !cleared.includes(level.id)) {
      setCleared([...cleared, level.id]);
    }
  }

  function goToNext() {
    setSelectedOption(null);
    setFeedback(null);
    setWasCorrect(null);
    if (currentLevel < trialLevels.length) {
      setCurrentLevel(currentLevel + 1);
    }
  }

  function restart() {
    setCurrentLevel(1);
    setCleared([]);
    setSelectedOption(null);
    setFeedback(null);
    setWasCorrect(null);
    setClaimed(false);
  }

  if (allCleared) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-2">🏅</div>
        <h2 className="text-2xl font-bold text-gold mb-2">Congrats!!</h2>
        <p className="text-ink max-w-md mx-auto mb-4">
          You have managed to answer all three questions correctly and saved yourself the trouble of dealing with TypeScript errors.
        </p>
        <button
          onClick={restart}
          className="bg-emerald text-parchment px-6 py-2 rounded hover:bg-emeraldDark"
        >
          Play again!
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center gap-6 mb-6">
        {trialLevels.map((l) => {
          const status = statusFor(l.id);
          return (
            <div key={l.id} className="flex flex-col items-center gap-1">
              <span
                className={
                  "w-9 h-9 rounded-full flex items-center justify-center border-2 font-semibold " +
                  (status === "cleared"
                    ? "bg-emerald text-parchment border-emeraldDark"
                    : status === "available"
                    ? "bg-gold text-ink border-gold"
                    : "bg-parchmentDark text-ink border-gold opacity-60")
                }
              >
                {l.id}
              </span>
              <small className="text-xs text-ink text-center max-w-[80px]">{l.title}</small>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-parchmentDark rounded-lg p-5">
        <h2 className="text-xl font-bold text-emeraldDark mb-1">{level.title}</h2>
        <p className="text-ink mb-4">{level.description}</p>
        <pre className="bg-ink text-parchment text-sm whitespace-pre-wrap font-mono p-4 rounded mb-4">
          {level.brokenCode}
        </pre>
        <p className="font-semibold text-ink mb-3">{level.question}</p>

        <div className="grid gap-2">
          {level.options.map((o) => {
            const isSelected = selectedOption === o.id;
            let classes = "text-left border-2 rounded px-3 py-2 text-sm border-gold bg-parchmentDark";
            if (isSelected) {
              classes = o.correct
                ? "text-left border-2 rounded px-3 py-2 text-sm border-emerald bg-green-100"
                : "text-left border-2 rounded px-3 py-2 text-sm border-danger bg-red-100";
            }
            return (
              <button
                key={o.id}
                onClick={() => pickOption(o.id)}
                disabled={wasCorrect === true}
                className={classes}
              >
                <code className="font-mono">{o.label}</code>
              </button>
            );
          })}
        </div>

        {feedback && (
          <div
            className={
              "mt-4 p-3 rounded border-l-4 " +
              (wasCorrect ? "bg-green-100 border-emerald" : "bg-red-100 border-danger")
            }
          >
            {feedback}
          </div>
        )}

        {wasCorrect && currentLevel < trialLevels.length && (
          <button
            onClick={goToNext}
            className="mt-4 bg-emerald text-parchment px-5 py-2 rounded hover:bg-emeraldDark"
          >
            Next level
          </button>
        )}

        {wasCorrect && currentLevel === trialLevels.length && (
          <button
            onClick={() => setClaimed(true)}
            className="mt-4 bg-emerald text-parchment px-5 py-2 rounded hover:bg-emeraldDark"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
