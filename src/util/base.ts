export abstract class Base<T> {
	protected input: T;
	public constructor(input: string) {
		this.input = this.parseInput(input);
	}

	public abstract run(part: number): string | number;
	protected parseInput(input: string): T {
		return input.trim().split('\n') as unknown as T;
	}
}

export const runbase = (base: new (input: string) => Base<unknown>) => (input: string, part: number) => new base(input).run(part);
