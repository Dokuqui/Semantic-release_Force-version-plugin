// Local Usage

// import SemanticReleaseError from "@semantic-release/error";

// export async function analyzeCommits(pluginConfig, context) {
//   const { FORCE_TYPE_VERSION } = pluginConfig;
//   const validReleaseTypes = ["major", "minor", "patch"];

//   if (FORCE_TYPE_VERSION === undefined || FORCE_TYPE_VERSION === "") {
//     return null;
//   } else if (!validReleaseTypes.includes(FORCE_TYPE_VERSION)) {
//     throw new SemanticReleaseError(
//       'Invalid FORCE_TYPE_VERSION',
//       "EINVALIDTYPE",
//       `Valid values of FORCE_TYPE_VERSION are ${validReleaseTypes}, but provided value: ${FORCE_TYPE_VERSION}`
//     );
//   }

//   return FORCE_TYPE_VERSION;
// }

// CI Usage

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
