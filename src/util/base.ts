export abstract class Base<T> {
	input: T;
	constructor(input: string){
		this.input = this.parseInput(input)
	}

	abstract run(part: number): string
	parseInput(input: string): T {
		return input.split("\n") as unknown as T
	}
}

export const runbase = (base: new(input: string) => Base<unknown>) =>
	(input: string, part: number) => (new base(input)).run(part)
