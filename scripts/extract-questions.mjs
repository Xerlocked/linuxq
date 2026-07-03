import fs from "node:fs";
import path from "node:path";

const input = process.argv[2];
const output = process.argv[3] ?? path.resolve("questions.js");

if (!input) {
  console.error("Usage: node scripts/extract-questions.mjs <Linux.md> [questions.js]");
  process.exit(1);
}

const source = fs.readFileSync(input, "utf8").replace(/\r\n/g, "\n");
const answerPattern = /^정답\s*:\s*([①②③④⑤]).*$/gm;
const answers = [...source.matchAll(answerPattern)];
const symbolToIndex = { "①": 0, "②": 1, "③": 2, "④": 3, "⑤": 4 };
const questions = [];

let segmentStart = 0;
for (const answer of answers) {
  const segment = source.slice(segmentStart, answer.index).trim();
  segmentStart = answer.index + answer[0].length;

  const optionMatches = [...segment.matchAll(/^[①②③④⑤]/gm)].slice(0, 4);
  if (optionMatches.length !== 4) continue;

  const promptRegion = segment.slice(0, optionMatches[0].index).trim();
  const questionStarts = [
    ...promptRegion.matchAll(/^\d+(?:-\d+)?\.(?!\s*\d)/gm),
  ];
  const questionStart = questionStarts.at(-1)?.index ?? 0;
  const leadingText = promptRegion.slice(0, questionStart).trim();
  const prompt = promptRegion.slice(questionStart).trim();

  if (
    leadingText &&
    questions.length &&
    questions.at(-1).explanation === "제공된 원문에 별도의 해설이 없습니다."
  ) {
    const recoveredExplanation = leadingText
      .replace(/^\s*▶\s*해설\s*/, "")
      .trim();
    if (recoveredExplanation) {
      questions.at(-1).explanation = recoveredExplanation;
    }
  }
  const fourthOptionStart = optionMatches[3].index + 1;
  const explanationMatch = segment
    .slice(fourthOptionStart)
    .match(/\s*▶\s*해설\s*/);
  const explanationMarker =
    explanationMatch?.index !== undefined
      ? fourthOptionStart + explanationMatch.index
      : -1;
  const explanationStart =
    explanationMarker >= 0
      ? explanationMarker + explanationMatch[0].length
      : segment.length;

  const options = optionMatches.map((match, index) => {
    const start = match.index + 1;
    const end =
      index < optionMatches.length - 1
        ? optionMatches[index + 1].index
        : explanationMarker >= 0
          ? explanationMarker
          : segment.length;
    return segment.slice(start, end).trim();
  });

  let explanation =
    explanationMarker >= 0
      ? segment.slice(explanationStart).trim()
      : "제공된 원문에 별도의 해설이 없습니다.";

  const sourceLabel =
    prompt.match(/^(\d+(?:-\d+)?\.)/)?.[1] ?? String(questions.length + 1);
  const title = prompt
    .replace(/^\d+(?:-\d+)?\.\s*/, "")
    .replace(/^\s+|\s+$/g, "")
    .replace(/\n{3,}/g, "\n\n");
  explanation = explanation.replace(/\n{3,}/g, "\n\n");
  if (!explanation) {
    explanation = "제공된 원문에 별도의 해설이 없습니다.";
  }

  questions.push({
    id: questions.length + 1,
    sourceLabel,
    question: title,
    options,
    answer: symbolToIndex[answer[1]],
    explanation,
  });
}

if (questions.length !== answers.length) {
  console.warn(`Parsed ${questions.length} of ${answers.length} answer blocks.`);
}

const payload = `window.LINUX_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(output, payload, "utf8");
console.log(`Wrote ${questions.length} questions to ${output}`);
