import { analyzeCommits } from "./src/force_version";

async function analyzeCommits(pluginConfig, context) {
    const { commits, releases, lastRelease, nextRelease, options, cwd } = context;
    await analyzeCommits(pluginConfig, context);
}

export default {
    analyzeCommits
};