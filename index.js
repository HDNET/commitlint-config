module.exports = {
    /**
     * The base are the conventional commit definitions
     * @see https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
     */
    extends: ['@commitlint/config-conventional'],

    /**
     * Main documentation of HDNET's HSR-3 (Git Commit Messages)
     */
    helpUrl: 'https://wiki.hdnet.de/display/OPS/HSR-3%3A+Git+Commit-Messages',

    /**
     * Adapting rules for HSR-3
     * @see https://commitlint.js.org/#/reference-rules
     */
    rules: {
        // Warn when missing project key is missing, but do not enforce (there may be cases without existing key).
        'references-empty': [1, 'never'],

        // Scopes with multiple words should be separated consistently
        'scope-case': [2, 'always', 'kebab-case'],

        // Subjects are sentences and begin uppercase
        'subject-case': [2, 'always', ['sentence-case']],

        // Need of more types like: "dx", "types"
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'dx',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
                'types',
            ],
        ],
    },
}
