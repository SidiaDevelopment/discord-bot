module.exports = {
    transform: {"^.+\\.ts?$": "ts-jest"},
    testEnvironment: "node",
    testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.ts",
        "!**/node_modules/**",
        "!**/*.d.ts",
        "!**/*.template.ts"
    ],
    coverageReporters: ["text"]
}
