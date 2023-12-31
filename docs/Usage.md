## Adding to Pipeline
To add this plugin to your pipeline you should adjust your `.releaserc.yaml` with next configurations:

```
tagFormat: "v${version}"

branches:
  - master
  - next

plugins:
- - "semantic-release-force-version"
```

## Case Example:

### Scenario Outline: As a developper member, I want to successfully force a "<expected_release_type>" release locally (on a fake git project)
   * Given I have access to a fake project versioned with "fake-server" 
   * And the semantic-release job in dry-run mode shows me the next tagged version 
   * And this previewed version is different from "<expected_release_type>"
   * When I set the config var "FORCE_TYPE_VERSION" to "<expected_release_type>"
   * And I trigger the semantic-release custom pluggin "forceVersion"
   * Then the string returned by the plugin to semantic-release is "<expected_release_type>"
   #### Examples:
    | expected_release_type |
    | --------------------- |
    | minor                 | 
    | major                 |
    | patch                 |

In this plugin we using version type(semver) to force our version if we need so. Then you will need to configure your .releaserc.yaml file for future call of this plugin. Here by default you should input in `FORCE_TYPE_VERSION: ““`. You have to do so in idea not to trigger force version in beginning and by default. To force your version you will need to change type input in your FORCE_TYPE_VERSION.
`
- FORCE_TYPE_VERSION: "" //default input which won't trigger job
- FORCE_TYPE_VERSION: "patch" //If you increase version like this you will force patch
- FORCE_TYPE_VERSION: "minor" //If you increase version like this you will force minor
- FORCE_TYPE_VERSION: "major" //If you increase version like this you will force major`
