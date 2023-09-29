# TsRs
TsRs is a TypeScript library that brings the Result and Option monads from Rust to the TypeScript ecosystem.

<!-- Tests: ![Jest Tests](https://img.shields.io/static/v1?label=tests&message=unknown&color=lightgrey)
[![Coverage Status](https://coveralls.io/repos/github/tmarndt1/TsRs/badge.svg?branch=main)](https://coveralls.io/github/tmarndt1/TsRs?branch=main) -->

[![Main](https://github.com/Tmarndt1/TsRs/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/Tmarndt1/TsRs/actions/workflows/main.yml)

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

async function fetchUserData(userId: number): Promise<Result<{userData: IUserData, invalid: string, error: string}>> {
    try {
        const response = await axios.get<{userData: IUserData, invalid: boolean}>(`${baseUrl}/api/users/${userId}`);

        if (response.data.invalid) {
            return new Result({ 
                kind: 'invalid',
                value: 'The user is invalid'
            });
        }

        return new Result({ 
            kind: 'userData',
            value: response.data
        });
    } catch (error) {
        return new Result({
            kind: 'error',
            value: error
        });
    }
}

const result = await fetchUserData(123);

result.match({
    userData: (userData) => {
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
