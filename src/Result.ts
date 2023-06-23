/** Represents a discriminated union type with a 'kind' property and a corresponding 'value' property */
type OneOf<T> = { kind: keyof T; value: T[keyof T] };

/**
 * Represents a result that encapsulates a value of a discriminated union type.
 * Provides a mechanism for pattern matching on the encapsulated value.
 */
export class Result<T> {
  	private _value: OneOf<T>;

	/**
	 * Constructs a new Result instance with the specified value.
	 * @param value - The value to encapsulate within the Result.
	 */
	public constructor(value: OneOf<T>) {
		this._value = value;
	}

	/**
	 * Creates a new Result instance with the specified value.
	 * @param value - The value to encapsulate within the Result.
	 * @returns A new Result instance.
	 */
	static of<U>(value: OneOf<U>): Result<U> {
		return new Result<U>(value);
	}

	/**
	 * Matches the encapsulated value against the provided cases and executes the appropriate case function.
	 * @param cases - An object mapping each kind to a case function.
	 * @returns The result of the executed case function.
	 * @throws Error if no matching case function is found.
	 */
	public match<R>(cases: { [K in keyof T]: (value: T[K]) => R }): R {
		if (cases == null) throw new Error("Cases cannot be null or undefined in OneOf");

		const { kind, value } = this._value;

		const caseFn = cases[kind];

		if (typeof caseFn !== "function") {
			throw new Error('Unhandled kind in OneOf');
		}

		return caseFn(value);
	}
}
