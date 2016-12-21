const globals = {
        __line: true,
        __logger: true
    },
    rules = {
        'accessor-pairs': 0,
        'array-bracket-spacing': [
            2,
            'never'
        ],
        'array-callback-return': 2,
        'arrow-body-style': [
            2,
            'as-needed',
            {
                requireReturnForObjectLiteral: false
            }
        ],
        'arrow-parens': [
            2,
            'as-needed'
        ],
        'arrow-spacing': [
            2,
            {
                after: true,
                before: true
            }
        ],
        'block-scoped-var': 0,
        'block-spacing': [
            2,
            'never'
        ],
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        'callback-return': 0,
        camelcase: 1,
        'capitalized-comments': 0,
        'class-methods-use-this': 1,
        'comma-dangle': [
            2,
            'never'
        ],
        'comma-spacing': [
            2,
            {
                after: true,
                before: false
            }
        ],
        'comma-style': [
            2,
            'last'
        ],
        complexity: 0,
        'computed-property-spacing': [
            2,
            'never'
        ],
        'consistent-return': 0,
        'consistent-this': [
            1,
            'me'
        ],
        'constructor-super': 2,
        curly: [
            2,
            'all'
        ],
        'default-case': 0,
        'dot-location': [
            2,
            'property'
        ],
        'dot-notation': 2,
        'eol-last': [
            2,
            'always'
        ],
        eqeqeq: [
            2,
            'always'
        ],
        'func-call-spacing': [
            2,
            'never'
        ],
        'func-name-matching': [
            1,
            'always',
            {
                includeCommonJSModuleExports: false
            }
        ],
        'func-names': [
            2,
            'never'
        ],
        'func-style': [
            2,
            'expression'
        ],
        'generator-star-spacing': [
            2,
            'after'
        ],
        'global-require': 1,
        'guard-for-in': 1,
        'handle-callback-err': [
            2,
            'error'
        ],
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        indent: [
            2,
            4,
            {
                ArrayExpression: 1,
                CallExpression: {
                    arguments: 1
                },
                FunctionDeclaration: {
                    body: 1,
                    parameters: 1
                },
                FunctionExpression: {
                    body: 1,
                    parameters: 1
                },
                MemberExpression: 1,
                ObjectExpression: 1,
                outerIIFEBody: 1,
                SwitchCase: 1,
                VariableDeclarator: 1
            }
        ],
        'init-declarations': 0,
        'jsx-quotes': [
            2,
            'prefer-double'
        ],
        'key-spacing': [
            2,
            {
                afterColon: true,
                beforeColon: false,
                mode: 'strict'
            }
        ],
        'keyword-spacing': [
            2,
            {
                after: true,
                before: true,
                overrides: {}
            }
        ],
        'line-comment-position': 0,
        'linebreak-style': [
            2,
            'unix'
        ],
        'lines-around-comment': 0,
        'lines-around-directive': [
            2,
            {
                after: 'always',
                before: 'never'
            }
        ],
        'max-depth': 0,
        'max-len': 0,
        'max-lines': 0,
        'max-nested-callbacks': 0,
        'max-params': 0,
        'max-statements': 0,
        'max-statements-per-line': [
            2,
            {
                max: 1
            }
        ],
        'multiline-ternary': [
            2,
            'always'
        ],
        'new-cap': 1,
        'new-parens': 2,
        'newline-after-var': [
            2,
            'always'
        ],
        'newline-before-return': 0,
        'newline-per-chained-call': 0,
        'no-alert': 1,
        'no-array-constructor': 2,
        'no-await-in-loop': 0,
        'no-bitwise': 1,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-catch-shadow': 0,
        'no-class-assign': 2,
        'no-cond-assign': 2,
        'no-confusing-arrow': [
            2,
            {
                allowParens: true
            }
        ],
        'no-console': 1,
        'no-const-assign': 2,
        'no-constant-condition': 1,
        'no-continue': 0,
        'no-control-regex': 0,
        'no-debugger': 2,
        'no-delete-var': 2,
        'no-div-regex': 0,
        'no-dupe-args': 2,
        'no-dupe-class-members': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-duplicate-imports': [
            2,
            {
                includeExports: true
            }
        ],
        'no-else-return': 1,
        'no-empty': 1,
        'no-empty-character-class': 2,
        'no-empty-function': [
            2,
            {
                allow: []
            }
        ],
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-ex-assign': 0,
        'no-extend-native': 1,
        'no-extra-bind': 1,
        'no-extra-boolean-cast': 2,
        'no-extra-label': 2,
        'no-extra-parens': 1,
        'no-extra-semi': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 0,
        'no-func-assign': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': [
            2,
            {
                boolean: false,
                number: false,
                string: true
            }
        ],
        'no-implicit-globals': 0,
        'no-implied-eval': 2,
        'no-inline-comments': 0,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-invalid-this': 0,
        'no-irregular-whitespace': [
            2,
            {
                skipComments: false,
                skipRegExps: false,
                skipStrings: false,
                skipTemplates: false
            }
        ],
        'no-iterator': 2,
        'no-label-var': 1,
        'no-labels': [
            2,
            {
                allowLoop: true,
                allowSwitch: false
            }
        ],
        'no-lone-blocks': 1,
        'no-lonely-if': 1,
        'no-loop-func': 2,
        'no-magic-numbers': 0,
        'no-mixed-operators': 0,
        'no-mixed-requires': 0,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-multiple-empty-lines': [
            2,
            {
                max: 1
            }
        ],
        'no-negated-condition': 2,
        'no-nested-ternary': 0,
        'no-new': 1,
        'no-new-func': 2,
        'no-new-object': 2,
        'no-new-require': 2,
        'no-new-symbol': 2,
        'no-new-wrappers': 2,
        'no-obj-calls': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 0,
        'no-path-concat': 1,
        'no-plusplus': 2,
        'no-process-env': 1,
        'no-process-exit': 1,
        'no-proto': 2,
        'no-prototype-builtins': 0,
        'no-redeclare': 2,
        'no-regex-spaces': 2,
        'no-reserved-keys': 0,
        'no-restricted-globals': 0,
        'no-restricted-imports': 0,
        'no-restricted-modules': 0,
        'no-restricted-properties': 0,
        'no-restricted-syntax': 0,
        'no-return-assign': 2,
        'no-return-await': 2,
        'no-script-url': 1,
        'no-self-assign': [
            2,
            {
                props: true
            }
        ],
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow': 0,
        'no-shadow-restricted-names': 2,
        'no-sparse-arrays': 1,
        'no-sync': 1,
        'no-tabs': 2,
        'no-template-curly-in-string': 1,
        'no-ternary': 0,
        'no-this-before-super': 2,
        'no-throw-literal': 2,
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-undefined': 2,
        'no-underscore-dangle': 0,
        'no-unexpected-multiline': 2,
        'no-unmodified-loop-condition': 2,
        'no-unneeded-ternary': 2,
        'no-unreachable': 1,
        'no-unsafe-finally': 1,
        'no-unsafe-negation': 2,
        'no-unused-expressions': 1,
        'no-unused-labels': 1,
        'no-unused-vars': [
            1,
            {
                args: 'after-used',
                vars: 'all'
            }
        ],
        'no-use-before-define': 2,
        'no-useless-call': 2,
        'no-useless-computed-key': 2,
        'no-useless-concat': 2,
        'no-useless-constructor': 2,
        'no-useless-escape': 2,
        'no-useless-rename': [
            2,
            {
                ignoreDestructuring: false,
                ignoreExport: false,
                ignoreImport: false
            }
        ],
        'no-useless-return': 2,
        'no-var': 2,
        'no-void': 0,
        'no-warning-comments': [
            1,
            {
                location: 'start',
                terms: [
                    'todo'
                ]
            }
        ],
        'no-whitespace-before-property': 2,
        'no-with': 2,
        'object-curly-newline': [
            2,
            {
                minProperties: 1,
                multiline: true
            }
        ],
        'object-curly-spacing': [
            2,
            'never'
        ],
        'object-property-newline': [
            2,
            {
                allowMultiplePropertiesPerLine: false
            }
        ],
        'object-shorthand': [
            2,
            'always'
        ],
        'one-var': [
            2,
            'always'
        ],
        'one-var-declaration-per-line': [
            2,
            'always'
        ],
        'operator-assignment': [
            2,
            'always'
        ],
        'operator-linebreak': [
            2,
            'after'
        ],
        'padded-blocks': [
            2,
            'never'
        ],
        'prefer-arrow-callback': 1,
        'prefer-const': [
            1,
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true
            }
        ],
        'prefer-numeric-literals': 2,
        'prefer-rest-params': 1,
        'prefer-spread': 2,
        'prefer-template': 1,
        'quote-props': [
            2,
            'as-needed'
        ],
        quotes: [
            1,
            'single'
        ],
        radix: 2,
        'require-await': 1,
        'require-jsdoc': 2,
        'require-yield': 1,
        'rest-spread-spacing': [
            2,
            'never'
        ],
        semi: [
            2,
            'always'
        ],
        'semi-spacing': [
            2,
            {
                after: true,
                before: false
            }
        ],
        'sort-imports': [
            2,
            {
                ignoreCase: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: [
                    'none',
                    'all',
                    'multiple',
                    'single'
                ]
            }
        ],
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': [
            2,
            'always'
        ],
        'space-before-function-paren': [
            2,
            'always'
        ],
        'space-in-brackets': 0,
        'space-in-parens': 0,
        'space-infix-ops': 2,
        'space-unary-ops': [
            2,
            {
                nonwords: false,
                words: true
            }
        ],
        'spaced-comment': [
            1,
            'always'
        ],
        strict: [
            2,
            'global'
        ],
        'symbol-description': 2,
        'template-curly-spacing': [
            2,
            'never'
        ],
        'unicode-bom': [
            2,
            'never'
        ],
        'use-isnan': 2,
        'valid-jsdoc': [
            1,
            {
                prefer: {
                    argument: 'arg',
                    augments: 'extends',
                    constructor: 'class',
                    defaultvalue: 'default',
                    desc: 'description',
                    exception: 'throws',
                    fileoverview: 'file',
                    fires: 'emits',
                    func: 'function',
                    host: 'external',
                    linkcode: 'link',
                    linkplain: 'link',
                    overview: 'file',
                    param: 'arg',
                    prop: 'property',
                    return: 'returns',
                    var: 'member'
                },
                requireParamDescription: false,
                requireReturn: false,
                requireReturnDescription: false
            }
        ],
        'valid-typeof': [
            2,
            {
                requireStringLiterals: false
            }
        ],
        'vars-on-top': 0,
        'wrap-iife': [
            2,
            'outside',
            {
                functionPrototypeMethods: true
            }
        ],
        'wrap-regex': 0,
        'yield-star-spacing': [
            2,
            'after'
        ],
        yoda: [
            2,
            'never',
            {
                exceptRange: false,
                onlyEquality: false
            }
        ]
    };

export {
    globals,
    rules
};
