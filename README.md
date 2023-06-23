# TsMonad
A Monad Typescript library inspired by the Rust programming language.

<!-- Tests: ![Jest Tests](https://img.shields.io/static/v1?label=tests&message=unknown&color=lightgrey)
[![Coverage Status](https://coveralls.io/repos/github/tmarndt1/tsmonad/badge.svg?branch=main)](https://coveralls.io/github/tmarndt1/tsmonad?branch=main) -->

[![Main](https://github.com/Tmarndt1/TsMonad/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/Tmarndt1/TsMonad/actions/workflows/main.yml)

| Statements | Branches | Functions | Lines |
| -----------|----------|-----------|-------|
| ![Statements](./coverage/badge-statements.svg) | ![Branches](./coverage/badge-branches.svg) | ![Functions](./coverage/badge-functions.svg) | ![Lines](./coverage/badge-lines.svg)

## Give a Star! :star:

If you like or are using this project please give it a star. Thanks!

## Usage
### Result Monad
```typescript

const monad = new Result<{stringCase: string, numberCase: number}>({ kind: "stringCase", value: "Hello world!"});
	
const result = monad.match({
    stringCase: (value) => `Received string: ${value}`,
    numberCase: (_) => 'Expected a string, but received a number',
});

// result is Received string: Hello world!

```

### Option Monad
```typescript

const option = new Option(42);

const result = option.match(
    (value) => value * 2,
    () => 0
);

// result is 84

```

## Authors

- **Travis Arndt**

## License

This project is licensed under the MIT License - [LICENSE.md](LICENSE)