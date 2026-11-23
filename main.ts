// Entry program for "THE WORLD — Monday 23 November 2026".
// Competition: news-image-20261123 on make.fun — "Sum up 23 November's
// world news in one image".
//
// The entry is a program that writes one image to /output/entry.png. The
// front page itself ships in this repository as entry.png (a dense newspaper
// front page: 38 stories across 7 regions, led by a seven-year-old boy
// pulled alive from the rubble in Dymer after a Russian strike killed 10).
// This program copies that file to the output directory, so both grader
// runs write the same bytes — a plain copy is deterministic by
// construction.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

function main(): void {
  const source = new URL("./entry.png", import.meta.url);
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const target = path.join(targetDir, "entry.png");
  // Fail fast with a clear message if the front page is missing or over
  // the 1 MiB competition cap, instead of a bare ENOENT from the copy.
  const stat = fs.statSync(source);
  if (stat.size >= 1024 * 1024) {
    throw new Error(`entry.png is ${stat.size} bytes, over the 1 MiB cap`);
  }
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(source, target);
  // Verify the copy landed whole: sizes must match.
  if (fs.statSync(target).size !== stat.size) {
    throw new Error("entry.png copy is incomplete");
  }
}

main();
