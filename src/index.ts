import "module-alias/register.js";
import { readFileSync } from "fs";
import { getDayAndPart } from "@utils";

getDayAndPart().then(([day, part]: [string, number]) => {
  console.log(`Finding solution for day ${day} part ${part}`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const run = require(`./day${day}`).default as (
    input: string,
    part: number
  ) => string;
  const input = readFileSync(`./input/day${day}.txt`).toString();

  console.log("Starting calculation...");

  const start = Date.now()
  const res = run(input, part);
  const time = Date.now() - start

  console.log(`Solution: ${res}`);
  console.log(`Calculated in ${time} ms`)
})
