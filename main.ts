// Post X Promote Make Your Own Bounty
// Copies POST.json (the entry: the URL of Mr Tol's X post promoting
// make.fun's make-your-own-bounty post) to /output/POST.json.
// Deterministic, no network, no dependencies.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve POST.json next to this script, not relative to the working
// directory: the grader runs `node /bot/main.ts` from another cwd, so a
// cwd-relative path does not find the file and the program exits 1.
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const SOURCE = resolve(SCRIPT_DIR, "POST.json");
const URL_PATTERN = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+$/;

function validate(): void {
  // Gate: POST.json must be a small JSON object whose url names
  // one X post, in the form x.com/<handle>/status/<id>.
  const size = statSync(SOURCE).size;
  if (size > 16384) {
    throw new Error(`POST.json is ${size} bytes, over the 16384 byte cap`);
  }
  const parsed: unknown = JSON.parse(readFileSync(SOURCE, "utf8"));
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("POST.json must be a JSON object");
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== "string" || !URL_PATTERN.test(url)) {
    throw new Error(`POST.json url must match x.com/<handle>/status/<id>, got ${String(url)}`);
  }
}

function main(): void {
  validate();
  // Prefer the grader's output directory when it is set, otherwise the
  // standard /output, with a cwd-relative ./output as a last fallback.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const targets = [resolve(outDir, "POST.json"), resolve("output", "POST.json")];
  let lastError: unknown;
  for (const target of targets) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(SOURCE, target);
      console.log(`wrote ${target}`);
      return;
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

main();
