import SemanticReleaseError from '@semantic-release/error'

export default async function analyzeCommits(pluginConfig, context) {
    const { env } = context
    const validReleaseTypes = ['major', 'minor', 'patch']
    const inputVersion = env.FORCE_TYPE_VERSION

    if (inputVersion === undefined || inputVersion === '') {
        return null
    } else if (!validReleaseTypes.includes(inputVersion)) {
        throw new SemanticReleaseError(
            'Invalid FORCE_TYPE_VERSION',
            'EINVALIDTYPE',
            `Valid values of FORCE_TYPE_VERSION are ${validReleaseTypes}, but provided value: ${inputVersion}`
        )
    }
    return inputVersion
}
