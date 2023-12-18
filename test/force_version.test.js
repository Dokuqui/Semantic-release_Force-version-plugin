const force_version = require('../src/force_version');
const { analyzeCommits } = require('../src/force_version');

test("should return the valid version", () => {
    const validForceVersion = "1.2.3";
    const context = { env: { FORCE_VERSION: validForceVersion } };

    const result = force_version.analyzeCommits({}, context);

    expect(result).toBe(validForceVersion);
});

test("should log an error and return null for an invalid forced version", () => {
    const invalidForceVersion = "invalid-version";
    const context = { env: { FORCE_VERSION: invalidForceVersion } };

    const result = force_version.analyzeCommits({}, context);

    expect(result).toBe(null);
});

test("should log an error and return null if FORCE_VERSION is not present in the environment", () => {
    const context = { env: {} };

    const result = force_version.analyzeCommits({}, context);

    expect(result).toBe(null);
});

test('analyzeCommits returns valid semver release type for force version', () => {
    const pluginConfig = {
        FORCE_VERSION: '0.0.5',
    };

    const context = {
        env: {},
    };

    const releaseType = analyzeCommits(pluginConfig, context);
    expect(releaseType).toBe('patch');
});

test('analyzeCommits returns null for invalid force version', () => {
    const pluginConfig = {
        FORCE_VERSION: 'invalid-version',
    };

    const context = {
        env: {},
    };

    const releaseType = analyzeCommits(pluginConfig, context);
    expect(releaseType).toBe(null);
});

test('analyzeCommits returns "major" for force version with major increment', () => {
    const pluginConfig = {
        FORCE_VERSION: '3.0.0',
    };

    const context = {
        env: {},
    };

    const releaseType = analyzeCommits(pluginConfig, context);
    expect(releaseType).toBe('major');
});