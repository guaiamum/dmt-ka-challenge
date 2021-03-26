module.exports = {
    parserOptions: {
        ecmaVersion: 9,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    settings: {
        react: {
            pragma: 'h',
            version: 'latest',
        },
    },
    rules: {
        'react/jsx-boolean-value': 'error',
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
        'react/self-closing-comp': 'error',
        'react/jsx-no-bind': ['error', {
            allowArrowFunctions: true,
            allowBind: false,
            ignoreRefs: true,
        }],
        'react/no-did-update-set-state': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/no-string-refs': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-curly-spacing': [2, { when: 'never', children: { when: 'always' } }],
        'react/jsx-no-undef': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/forbid-dom-props': [2, { forbid: ['className'] }],
    },
};
