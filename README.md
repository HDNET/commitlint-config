# HDNET commitlint-config

This packages defines the strict implementation of the HDNET Commit Message Guidelines
from the HDNET Standard Recommendations
([HSR-3](https://hdgroup.atlassian.net/wiki/spaces/OPS/pages/45940834/HSR-3+Git+Commit-Messages)) as npm package
using [commitlint](https://commitlint.js.org/)
through a [shareable config](https://commitlint.js.org/#/concepts-shareable-config).

## Getting started

1. Ideally, setup Node.js >= 20.

2. Install dependencies
```bash
$ npm i -D @commitlint/cli @hdnet/commitlint-config

For Node.js < 18:
$ npm i -D @commitlint/cli@17 @hdnet/commitlint-config@0

For Node.js < 20:
$ npm i -D @commitlint/cli@18 @hdnet/commitlint-config@0
```

3. Create commitlint config (i.e. `commitlint.config.mjs`) and extend from @hdnet/commitlint-config:
```javascript
export default {
    extends: '@hdnet',

    parserPreset: {
        parserOpts: {
            // replace "PROJECT-" with your issue prefix
            issuePrefixes: ['PROJECT-'],
        },
    },
}
```

4. Add commitlint to you git hook configuration (i.e. using [husky](https://commitlint.js.org/#/guides-local-setup?id=install-husky))


## Contribute

To setup current node version, you can use [nvm](https://github.com/nvm-sh/nvm)
(in this project a [.nvmrc](./.nvmrc) file is maintained).
