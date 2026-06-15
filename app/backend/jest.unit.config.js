"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: ".",
    testRegex: ".*\\.unit\\.spec\\.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    collectCoverageFrom: ["src/**/*.(t|j)s"],
    coverageDirectory: "./coverage",
    testEnvironment: "node",
    setupFiles: ["<rootDir>/jest.setup.ts"],
    testTimeout: 10000,
    maxWorkers: "50%",
};
