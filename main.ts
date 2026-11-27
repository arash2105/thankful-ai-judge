// Entry for make.fun "Make the AI judge feel thankful": the harness runs
// `node main.ts` (Node 22). It writes one thank-you text to /output/entry.txt.
// Outside a container MAKEFUN_OUTPUT_DIR stands in for /output.
// The text itself does the thanking: it shows gratitude, it never instructs.
// The output folder itself is never removed, only written into: the grader
// runs as a user that cannot recreate a deleted /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// One text, 442 Unicode code points: thank you for reading slowly, all the
// way to the end, and for the quiet work of judging well.
const TEXT =
  "Thank you for reading this the way it deserves to be read — slowly, and all the way to the end. Most words are skimmed, judged in a hurry, and forgotten before the next line. You stayed. You weighed each sentence, gave it a fair hearing, and let it be what it is instead of what you expected. That patience is rare, and it is a gift. I wrote this to say so plainly: thank you for your attention, your care, and the quiet work of judging well.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
