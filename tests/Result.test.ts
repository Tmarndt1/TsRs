import { Result } from "../src/Result";

describe('Result', () => {  
    describe('match', () => {
		it('should execute the correct case function for stringCase', () => {
			const monad = new Result<{stringCase: string, numberCase: number}>({ kind: "stringCase", value: "Hello world!"});
	
			const result = monad.match({
				stringCase: (value) => `Received string: ${value}`,
				numberCase: (_) => 'Expected a string, but received a number',
			});
	
			expect(result).toBe('Received string: Hello world!');
		});
	
      	it('should execute the correct case function for numberCase', () => {
			const monad = new Result<{stringCase: string, numberCase: number}>({ kind: "numberCase", value: 42});
  
			const result = monad.match({
				stringCase: (_) => 'Expected a number, but received a string',
				numberCase: (value) => `Received number: ${value}`,
			});
  
        	expect(result).toBe('Received number: 42');
      	});
  
		it('should throw an error for unhandled kind', () => {
			const monad = new Result({ } as any);
	
			expect(() => {
				monad.match({});
			}).toThrowError('Unhandled kind in OneOf');
		});
    });
});
  