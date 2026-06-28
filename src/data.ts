import type { ComparisonPoint, TrialLevel } from "./types";

export const comparisons: ComparisonPoint[] = [
  {
    id: "typing",
    title: "Type System",
    js: "let Tuqa's age = 22;\nage = \"twenty two\";",
    ts: "let Tuqa's age: number = 22;\nage = \"twenty two\"; // error!! wrong!!!!!",
    note: "In JavaScript, we can change variables whenever we want however we want. On the other hand, once we define a variable in TypeScript, it stays as it is. No. Matter. What."
  },
  {
    id: "interfaces",
    title: "Execution",
    js: "const user = { name: \"Tuqa\", age: 22 };\nconsole.log(user.email);",
    ts: "interface User { name: string; age: number; }\nconst user: User = { name: \"Tuqa\", age: 22 };\nuser.email; // property doesn't exist, flagged",
    note: "An interface basically says exactly what fields an object is supposed to have, so you can't accidentally use one that's missing."
  },
    {
    id: "checking",
    title: "Error Handling",
    js: "function shout(text) {\n  return text.toUpperCase();\n}\nshout(7);",
    ts: "function shout(text: string) {\n  return text.toUpperCase();\n}\nshout(7); // caught right away",
    note: "JavaScript detects errors after running the code (run-time). Meanwhile, TypeScript detects errors while the programmer is still writing the code (compile-time)."
  },
    {
    id: "compiling",
    title: "Compiling",
    js: "Runs directly in the browser or Node, nothing extra needed.",
    ts: "Has to be compiled into plain JavaScript first (with tsc or a bundler) before a browser can run it.",
    note: "Once you start a JavaScript program, it runs directly. However, TypeScript needs to be compiled into JavaScript before the browser can run it."
  },
  {
    id: "tooling",
    title: "Where It's Used",
    js: "JavaScript is used for small, simple projects.",
    ts: "TypeScript is used for big, complicated projects.",
    note: "TypeScript is used for bigger projects because of the ability to detect errors before running the program and because the code is cleaner and more consistent (considering the fact that its variables stay as they are once they are defined, unlike JavaScript)."
  },
];

export const trialLevels: TrialLevel[] = [
  {
    id: 1,
    title: "Level 1: Basic types",
    description: "This variable keeps changing type, which is exactly the kind of bug TypeScript is meant to catch.",
    brokenCode: "let score = 250;\nscore = \"two hundred fifty\";\nscore = score + 10;",
    question: "Which fix actually stops score from being reassigned to a string?",
    options: [
      {
        id: "a",
        label: "let score = 250;",
        correct: false,
        feedback: "Nope! That's just plain JS, nothing stops it from being reassigned to a string later. Try again."
      },
      {
        id: "b",
        label: "let score: number = 250;",
        correct: true,
        feedback: "Correct! Now we have defined score as a number, so assigning a string to it will be a 'type error'."
      },
      {
        id: "c",
        label: "let score = number(250);",
        correct: false,
        feedback: "Nope! Number isn't a function you can call like that, this isn't valid code. Try again."
      },
      {
        id: "d",
        label: "var score = \"250\";",
        correct: false,
        feedback: "Nope! This makes score a string from the start, which is actually the opposite of what we want.... Try again."
      }
    ]
  },
  {
    id: 2,
    title: "Level 2: Typing objects",
    description: "This function expects an object with specific fields, but nothing is enforcing that right now.",
    brokenCode: "const intern = {\n  name: \"Tuqa\",\n  Age: 22\n};\n\nfunction describe(i) {\n  return i.name + \" has \" + i.age + \" age\";\n}",
    question: "How do you type 'describe' so it requires my name and age, and rejects objects missing them?",
    options: [
      {
        id: "a",
        label: "function describe(i: any) { ... }",
        correct: false,
        feedback: "Nope! 'any' turns off type checking completely, which wouldn't require anything from the start. Try again."
      },
      {
        id: "b",
        label: "function describe(i: { name: string; age: number }) { ... }",
        correct: true,
        feedback: "Correct! Now i has to have a string name and a number age or TypeScript will complain."
      },
      {
        id: "c",
        label: "function describe(i: string) { ... }",
        correct: false,
        feedback: "Nope! 'i' is an object with multiple fields, not a single string. Try again."
      },
      {
        id: "d",
        label: "function describe(i) { i.age = \"full\"; }",
        correct: false,
        feedback: "Nope! No type was added here, and this also overwrites age with a string, which is another bug. Great. Try again."
      }
    ]
  },
  {
    id: 3,
    title: "Level 3: Return types",
    description: "This function doesn't always return something, which can cause some serious problems later on (like crashing D:).",
    brokenCode: "function getBonus(level) {\n  if (level > 10) {\n    return level * 2;\n  }\n}\n\nconst result = getBonus(5);\nconsole.log(result.toFixed(2));",
    question: "Which signature would make TypeScript flag the missing return before this even runs?",
    options: [
      {
        id: "a",
        label: "function getBonus(level: number): number { ... }",
        correct: true,
        feedback: "Correct! Saying it returns 'number' means every code path HAS to return a number, so the missing else branch gets flagged."
      },
      {
        id: "b",
        label: "function getBonus(level) { ... }",
        correct: false,
        feedback: "Nope! The return type was declared, so TypeScript won't catch the missing return here. Try again."
      },
      {
        id: "c",
        label: "function getBonus(level: number): void { ... }",
        correct: false,
        feedback: "Nope! 'void' means it returns nothing at all, but we want the output to be a number. Try again."
      },
      {
        id: "d",
        label: "function getBonus(level: string): number { ... }",
        correct: false,
        feedback: "Nope! level was never a string to begin with, this isn't what we want :/ Try again."
      }
    ]
  }
];
