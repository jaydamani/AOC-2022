import { Base, runbase } from '@utils';
class Day10 extends Base<string[]> {
	private _cycle = 0;
	private X = 1;
	private result = '';
	private total = 0;
	private signals = [20, 60, 100, 140, 180, 220];

	public run(part: number) {
		for (const op of this.input) {
			this.cycle();
			if (op === 'noop') continue;
			this.cycle();
			this.X += +op.replace('addx ', '');
		}
		if (part === 1) return this.total.toString();
		return this.result;
	}

	private cycle() {
		const x = this._cycle % 40;
		if (x === 0) this.result += '\n';
		this.draw(x);
		this._cycle++;
		if (this.signals.includes(this._cycle)) this.total += this._cycle * this.X;
	}

	private draw(x: number) {
		if (Math.abs(this.X - x) < 2) this.result += '#';
		else this.result += '.';
	}
}

export default runbase(Day10);
/*
##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....
.. 

###..####.#..#.####..##..###..####.####.
#..#.#....#.#.....#.#..#.#..#.#....#....
#..#.###..##.....#..#....#..#.###..###..
###..#....#.#...#...#....###..#....#....
#.#..#....#.#..#....#..#.#....#....#....
#..#.#....#..#.####..##..#....####.#....
..


*/
