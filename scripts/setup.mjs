import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const day = process.env.day ? process.env.day : new Date().getDate().toString();
const folderPath = join("./src", `day${day.padStart(2, "0")}`);

if (!existsSync(folderPath)) mkdirSync(folderPath);

const index = join(folderPath, "index.ts");
if (!existsSync(index)) writeFileSync(index, "");

const test = join(folderPath, "test.ts");
if (!existsSync(test))
  writeFileSync(
    test,
    `export const answers = []
export const input = \`\``
  );
