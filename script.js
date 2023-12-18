import FORCE_VERSION from './src/force_version';

async function analyzeCommits(pluginConfig, context) {
    const { commits, lastRelease, nextRelease, options, cwd } = context;
    await FORCE_VERSION(pluginConfig, context);
}

export default { analyzeCommits };