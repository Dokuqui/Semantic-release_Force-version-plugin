import analyzeCommits from '../src/force_type'

describe('analyzeCommits function', () => {
    test('returns null when FORCE_TYPE_VERSION is not provided', async () => {
        const pluginConfig = {}
        const context = { env: {} }

        const result = await analyzeCommits(pluginConfig, context)

        expect(result).toBeNull()
    })

    test('throws an error for invalid FORCE_TYPE_VERSION', async () => {
        const pluginConfig = {}
        const context = { env: { FORCE_TYPE_VERSION: '2.2.2' } }

        await expect(analyzeCommits(pluginConfig, context)).rejects.toThrowError('Invalid FORCE_TYPE_VERSION')
    })

    const validTypes = ['major', 'minor', 'patch']

    test.each(validTypes)(
        'returns FORCE_TYPE_VERSION when it is valid type \'%s\'',
        async (validType) => {
            const pluginConfig = {}
            const context = { env: { FORCE_TYPE_VERSION: validType } }

            const result = await analyzeCommits(pluginConfig, context)

            expect(result).toBe(validType)
        }
    )
})
