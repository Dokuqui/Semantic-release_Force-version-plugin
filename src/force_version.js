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

import SemanticReleaseError from "@semantic-release/error";

export async function analyzeCommits(pluginConfig, context) {
  const { env } = context;
  const validReleaseTypes = ["major", "minor", "patch"];

  if (env['FORCE_TYPE_VERSION'] === undefined || env['FORCE_TYPE_VERSION'] === "") {
    return null;
  } else if (!validReleaseTypes.includes(env['FORCE_TYPE_VERSION'])) {
    throw new SemanticReleaseError(
      'Invalid FORCE_TYPE_VERSION',
      "EINVALIDTYPE",
      `Valid values of FORCE_TYPE_VERSION are ${validReleaseTypes}, but provided value: ${env['FORCE_TYPE_VERSION']}`
    );
  }

  return env['FORCE_TYPE_VERSION'];
}