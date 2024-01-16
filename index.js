import analyzeCommits from './src/force_version'

async function runAnalyzeCommits(pluginConfig, context) {
    await analyzeCommits(pluginConfig, context)
}

export default {
    analyzeCommits: runAnalyzeCommits
}
