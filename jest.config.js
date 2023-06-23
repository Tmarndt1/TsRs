module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	coverageDirectory: "coverage",
	coverageReporters: [
		"json-summary", 
		// "text",
		// "lcov"
	]
};
