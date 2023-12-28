module.exports = {
    testEnvironment: "node",
    transform: {
    "^.+\\.js$": "babel-jest",
    },
    moduleNameMapper: {
    "^@semantic-release/error$":
        "<rootDir>/__mocks__/@semantic-release/error.js",
    },
};