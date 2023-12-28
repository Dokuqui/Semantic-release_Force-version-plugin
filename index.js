import FORCE_TYPE_VERSION from './src/force_type';

async function analyzeCommits(pluginConfig, context) {
    const { commits, releases, lastRelease, nextRelease, options, cwd } = context;
    await FORCE_TYPE_VERSION(pluginConfig, context);
}

export default {
    analyzeCommits
};