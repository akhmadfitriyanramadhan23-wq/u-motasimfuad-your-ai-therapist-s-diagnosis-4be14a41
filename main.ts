// Your AI Therapist's Diagnosis — make.fun entry.
// Writes a single-line diagnosis (<=200 chars) to /output/entry.txt.
// Node 22 stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Diagnosis: chronic intention-hoarding. You opened 47 tabs 'to read later'; zero read since March. Treatment: close one tab a day and sit quietly with the grief.";

const MAX_CHARS = 200;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || !ENTRY.trim()) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
