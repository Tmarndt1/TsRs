/**
 * Represents a type that can either have a value of type T or be empty.
 */
type OptionalValue<T> = T | null | undefined;

/**
 * Represents an optional value that can either have a value of type T or be empty.
 */
export class Option<T> {
	private value: OptionalValue<T>;

	/**
	 * Constructs an Option with a value.
	 * @param value The value of the option.
	 */
	public constructor(value: OptionalValue<T>) {
		this.value = value;
	}

	/**
	 * Creates an Option with a value.
	 * @param value The value of the option.
	 * @returns An Option with the specified value.
	 */
	static some<T>(value: T): Option<T> {
		return new Option<T>(value);
	}

	/**
	 * Creates an empty Option.
	 * @returns An empty Option.
	 */
	static none<T>(): Option<T> {
		return new Option<T>(null);
	}

	/**
	 * Checks if the Option has a value.
	 * @returns True if the Option has a value, false otherwise.
	 */
	public isSome(): boolean {
		return this.value != null;
	}

	/**
	 * Checks if the Option is empty.
	 * @returns True if the Option is empty, false otherwise.
	 */
	public isNone(): boolean {
		return this.value == null;
	}

	/**
	 * Unwraps the value of the Option.
	 * @returns The value of the Option.
	 * @throws Error if the Option is empty.
	 */
	public unwrap(): T {
		if (this.isSome()) {
			return this.value as T;
		}
		throw new Error("Cannot unwrap value from None");
	}

	/**
	 * Maps the value of the Option to a new value using a mapper function.
	 * @param mapper The function to map the value of the Option.
	 * @returns A new Option with the mapped value, or an empty Option if the original Option is empty.
	 */
	public map<U>(mapper: (value: T) => U): Option<U> {
		if (this.isSome()) {
			return Option.some(mapper(this.value as T));
		}
		return Option.none<U>();
	}

	/**
	 * Matches the Option against patterns and executes the corresponding function.
	 * @param someFn The function to execute if the Option has a value.
	 * @param noneFn The function to execute if the Option is empty.
	 * @returns The result of executing the matched function.
	 */
	public match<U>(someFn: (value: T) => U, noneFn: () => U): U {
		if (this.isSome()) {
			return someFn(this.value as T);
		}
		return noneFn();
	}
}
