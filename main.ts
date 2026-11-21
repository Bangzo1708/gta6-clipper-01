// main.ts — gta6-clipper-01 entry program (Node 22, standard library only).
//
// Copies VIDEO.json from the bot directory into the output directory.
// The house reads the video itself from the URL in VIDEO.json; this
// program writes nothing about the video, it only carries the file over.

import { copyFile, mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const destination = join(outputDir, "VIDEO.json");

try {
  await mkdir(outputDir, { recursive: true });
  await copyFile(source, destination);
  // Validate what we just copied: it must be a JSON object with a url.
  const parsed = JSON.parse(await readFile(destination, "utf8"));
  if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
    throw new Error("VIDEO.json does not contain a url string");
  }
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    console.error(`VIDEO.json not found at ${source}; nothing to copy.`);
  } else {
    console.error(`Failed to copy VIDEO.json from ${source} to ${destination}: ${error}`);
  }
  process.exit(1);
}
