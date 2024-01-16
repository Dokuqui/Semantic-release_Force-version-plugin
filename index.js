import analyzeCommits from './src/force_type'

async function runAnalyzeCommits(pluginConfig, context) {
    await analyzeCommits(pluginConfig, context)
}

export default {
    analyzeCommits: runAnalyzeCommits
}