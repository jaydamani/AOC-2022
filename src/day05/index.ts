import { Base, runbase } from "@utils";

type stack = (string | undefined)[][];

class day05 extends Base<string[]> {
	declare stack: stack;
	parseInput(input: string) {
		const [stack, steps] = input.split("\n\n");
		this.stack = this.parseStack(stack);
		return steps.trim().split("\n");
	}
	parseStack(input: string): (string | undefined)[][] {
		const arr: stack = [];
		for (const line of input.split("\n")) {
			for (let i = 1; i < line.length; i += 4) {
				const crate = line[i];
				if (crate.trim()) (arr[(i + 3) / 4] ??= []).push(crate);
			}
		}
		return arr;
	}
	run(part: number) {
		for (const step of this.input) {
			const [, amount, from, to] = step.match(
				/move (\d+) from (\d+) to (\d+)/
			)!;
			if (part == 1)
				for (let i = 0; i < +amount; i++)
					this.stack[+to].unshift(this.stack[+from].shift());
			else if (part == 2)
				this.stack[+to].unshift(...this.stack[+from].splice(0, +amount));
			else throw Error("Incorrect Part Number");
		}
		return this.stack.reduce((a, b) => (a += b[0]), "");
	}
}

function splitByLength(input: string, length: number) {
	const arr = [];
	for (let i = 0; i < input.length; i += length) {
		arr.push(input.slice(i, i + length));
	}
	return arr;
}

export default runbase(day05);
