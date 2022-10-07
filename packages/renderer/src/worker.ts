import { join } from "path";
import { readFileSync } from "graceful-fs";

try {
  readFileSync("/dummy.txt", "utf-8");
} catch {}

console.log(join("a", "b"));
