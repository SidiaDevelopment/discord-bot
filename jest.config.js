module.exports = {
    transform: {
        "^.+\\.ts?$": [
            "ts-jest",
            {
                diagnostics: false
            }
        ]
    },
    testEnvironment: "node",
    testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "!d.ts"],
    preset: "ts-jest",
    collectCoverageFrom: [
        "packages/**/*.ts",
        "!**/node_modules/**",
        "!**/*.d.ts",
        "!**/*.template.ts"
    ],
    coverageReporters: ["text"],
}
