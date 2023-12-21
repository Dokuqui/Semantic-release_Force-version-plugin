To use this plugin you will have to add it in your configuration file /.releaserc.yaml
To add configuration you should input:
1. `plugin path`
2. Secondly you will need add Force Version in path: `FORCE_VERSION: "0.0.0"`
By default you can put 0.0.0 version and this plugin won't be executed and will be in stand-by mode

After that if you need to force some version you can adjust like this:
1. To force patch version you could input `0.0.1`
2. To force minor version you could input `0.1.0`
3. To force major version you could input `1.0.0`

That will help you force your version by +1.