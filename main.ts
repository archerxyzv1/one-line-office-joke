// One-Line Office Joke: 24-Hour Sprint (Node 22, standard library only): it writes
// exactly one joke, a one-line joke about office life, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 200 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I told my manager I need fewer meetings and more time to work. He scheduled a meeting to discuss it.';

if (JOKE.length < 1 || JOKE.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${JOKE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf-8');
