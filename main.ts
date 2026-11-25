import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny single line a hopeless tech support agent says to a
// desperate customer: the agent "finds" the fault, prescribes the
// classic off-and-on, then escalates to a senior agent who is just
// himself in a tie. The agent's cheerful uselessness is the joke;
// the customer is never the butt.
const entry: string =
  "Good news, I found the problem: it is still switched on. Turn it off, count to ten, and if that fails I will transfer you to a senior agent — who is me, but wearing a tie.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outputDir, { recursive: true });
// No trailing newline: the gate counts characters, 1 to 199.
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
