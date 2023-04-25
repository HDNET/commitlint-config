# HDNET commitlint-config

This packages defines the strict implementation of the HDNET Commit Message Guidelines 
from the HDNET Standard Recommendations 
([HSR-3](https://wiki.hdnet.de/display/OPS/HSR-3%3A+Git+Commit-Messages)) as npm package
using [commitlint](https://commitlint.js.org/) 
through a [shareable config](https://commitlint.js.org/#/concepts-shareable-config). 

## Getting started

1. Make sure you setup node >= 14

2. Install dependencies
```bash
# $ npm i -D @commitlint/cli @hdnet/commitlint-config
# ...Oops this does not work yet. But: we'll have it in the npm registry soon.
# Instead, use:

$ npm i -D @commitlint/cli github:HDNET/commitlint-config
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
