import { Option } from "../src/Option";

describe("Option", () => {
	describe("some", () => {
		it("should create an Option with a value", () => {
			const option = new Option(42);
			expect(option.isSome()).toBe(true);
			expect(option.isNone()).toBe(false);
			expect(option.unwrap()).toBe(42);
		});
	});

	describe("none", () => {
		it("should create an empty Option", () => {
			const option = Option.none();
			expect(option.isSome()).toBe(false);
			expect(option.isNone()).toBe(true);
			expect(() => option.unwrap()).toThrowError("Cannot unwrap value from None");
		});
	});

	describe("map", () => {
		it("should map the value of the Option", () => {
			const option = new Option(42);
			const mappedOption = option.map((value) => value * 2);
			expect(mappedOption.isSome()).toBe(true);
			expect(mappedOption.unwrap()).toBe(84);
		});

		it("should return an empty Option if the original Option is empty", () => {
			const option = Option.none();
			const mappedOption = option.map((value) => value as any * 2);
			expect(mappedOption.isSome()).toBe(false);
			expect(mappedOption.isNone()).toBe(true);
		});
	});

	describe("match", () => {
		it("should execute the someFn if the Option has a value", () => {
			const option = new Option(42);
			const result = option.match(
				(value) => value * 2,
				() => 0
			);
			expect(result).toBe(84);
		});

		it("should execute the noneFn if the Option is empty", () => {
			const option = Option.none();
			const result = option.match(
				(value) => value as any * 2,
				() => 0
			);
			expect(result).toBe(0);
		});
	});
});
  