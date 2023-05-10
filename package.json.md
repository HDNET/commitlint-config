# [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

> This document serves as a replacement for comments in `package.json`, since it includes a lot of configuration often
> requiring explanation.

- [scripts](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#scripts)
    - `prepare` Installs git hooks with husky. If install fails, it omits npm error
      (i.e. when installed with `npm install --omit=dev` and husky can not be found)
      through husky's suggested disabled ci settings
      (see: [disable husky with custom script](https://typicode.github.io/husky/#/?id=with-a-custom-script)).
