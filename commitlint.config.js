import hdnetCommitlintRules from './index.js'

export default {
    extends: '@commitlint/config-conventional',

    parserPreset: {
        parserOpts: {
            issuePrefixes: ['#'],
        },
    },

    rules: hdnetCommitlintRules.rules,
}
