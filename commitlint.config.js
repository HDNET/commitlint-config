const { rules } = require('./index.js')

module.exports = {
    extends: '@commitlint/config-conventional',

    parserPreset: {
        parserOpts: {
            issuePrefixes: ['#'],
        },
    },

    rules,
}
