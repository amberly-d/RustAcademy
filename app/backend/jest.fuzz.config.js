"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testRegex: ['.fuzz.spec.ts$'],
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    testEnvironment: 'node',
    // Fuzz tests need long timeouts because they run thousands of iterations
    testTimeout: 120000,
};
exports.default = config;
