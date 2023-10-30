# HDNET commitlint-config

This packages defines the strict implementation of the HDNET Commit Message Guidelines 
from the HDNET Standard Recommendations 
([HSR-3](https://wiki.hdnet.de/display/OPS/HSR-3%3A+Git+Commit-Messages)) as npm package
using [commitlint](https://commitlint.js.org/) 
through a [shareable config](https://commitlint.js.org/#/concepts-shareable-config). 

## Getting started

1. Make sure you setup node >= 14.

2. Install dependencies
```bash
Node.js < 18
$ npm i -D @commitlint/cli@17 @hdnet/commitlint-config

Node.js >= 18 
$ npm i -D @commitlint/cli @hdnet/commitlint-config
```

3. Create commitlint config (i.e. `commitlint.config.js`) and extend from @hdnet/commitlint-config:
```javascript
module.exports = {
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
