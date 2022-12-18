import "module-alias/register"
import { formatDay } from '@utils';
import { readFileSync } from "fs"

const day = process.env.day ? parseInt(process.env.day) : (new Date()).getDate()
const part = process.env.part ? parseInt(process.env.part) : 1

// eslint-disable-next-line @typescript-eslint/no-var-requires
const run = require(`./day${formatDay(day)}`).default as (input: string, part: number) => string
const input = readFileSync(`./input/day${formatDay(day)}.txt`).toString()

console.log(`Day ${day} | Part ${part} - Solution: ${run(input, part)}`);

