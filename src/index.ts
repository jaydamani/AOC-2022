import "module-alias/register"
import { formatDay } from '@utils';
import { readFileSync } from "fs"

const day = process.env.npm_config_day ? parseInt(process.env.npm_config_day) : (new Date()).getDate()
const part = process.env.npm_config_part ? parseInt(process.env.npm_config_part) : 1

// eslint-disable-next-line @typescript-eslint/no-var-requires
const run = require(`./day${formatDay(day)}.js`).default as (input: string, part: number) => string
const input = readFileSync(`@input/day${formatDay(day)}`).toString()

console.log(`Day ${day} | Part ${part} - Solution: ${run(input, part)}`);

