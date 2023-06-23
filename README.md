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
### Result Example
```typescript
const monad = new Result<{stringCase: string, numberCase: number}>({ kind: "stringCase", value: "Hello world!"});
	
const result = monad.match({
    stringCase: (value) => `Received string: ${value}`,
    numberCase: (_) => 'Expected a string, but received a number',
});

// result is Received string: Hello world!
```

### Result Use Case
```typescript
import axios from 'axios';

async function fetchUserData(userId: number): Promise<Result<{ success: UserData, invalid: string, error: string }>> {
    try {
        const response = await axios.get(`/api/users/${userId}`);

        const userData: UserData = response.data;
        
        if (response.data.invalid) return new Result({ invalid: 'The user is invalid' });

        return new Result({ kind: 'success', value: userData });
    } catch (error) {
        return new Result({ kind: 'error', value: error.message });
    }
}

const result = await fetchUserData(123);

result.match({
    success: (userData) => {
        console.log('User data:', userData);
    },
    invalid: (message) => {
        console.log(message)
    },
    error: (error) => {
        console.error('Error fetching user data:', error);
    }
});
```

### Option Example
```typescript

const option = new Option(21);

const result = option.match(
    (value) => value * 2,
    () => 0
);

// result is 42
```

### Option Use Case
```typescript
const option: Option<User> = context.getUser(123);

if (option.isNone()) return;

const value: User = option.unwrap();

// Handle business logic
```

## Authors

- **Travis Arndt**

## License

This project is licensed under the MIT License - [LICENSE.md](LICENSE)
