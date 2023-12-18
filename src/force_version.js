module.exports = {
    analyzeCommits: (pluginConfig, context) => {
        const { FORCE_VERSION } = pluginConfig;
        const { env } = context;

        if (/^\d+\.\d+\.\d+$/.test(FORCE_VERSION)) {
            const [major, minor, patch] = FORCE_VERSION.split(".").map(Number);

            if (major > 0) {
                return "major";
            } else if (minor > 0) {
                return "minor";
            } else if (patch > 0) {
                return "patch";
            }
        } else {
            return null;
        }
    },
}