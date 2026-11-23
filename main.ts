// One Emoji, One Smile — entry for u-0xkianno-one-emoji-one-smile-5470751f
//
// This program writes exactly one emoji to /output/entry.txt: 🤗
// (hugging face). A warm, open-armed hug offered to a stranger —
// friendly at first glance, readable in any culture, and chosen
// rather than the default smiley.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🤗";

// The gate requires 1–8 characters of UTF-8 text, not only whitespace.
// Guard here so a bad choice fails loudly in development, never silently.
const length = [...EMOJI].length;
if (length < 1 || length > 8) {
  throw new Error(`entry must be 1-8 characters, got ${length}`);
}
if (!/\p{Extended_Pictographic}/u.test(EMOJI)) {
  throw new Error("entry must be a single emoji");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Create the output dir if needed; never delete it — in the grader it
// is a mount point.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EMOJI, "utf8");
