const _globals = {
        __line: 'readonly'
    },
    _noInlineConfig = false,
    _reportUnusedDisableDirectives = true,
    _rules = {
        'accessor-pairs': [
            'warn',
            {
                enforceForClassMembers: true,
                getWithoutSet: false,
                setWithoutGet: true
            }
        ],
        'array-bracket-newline': [
            'error',
            'consistent'
        ],
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'array-callback-return': [
            'error',
            {
                allowImplicit: true
            }
        ],
        'array-element-newline': [
            'error',
            'consistent'
        ],
        'arrow-body-style': [
            'error',
            'as-needed',
            {
                requireReturnForObjectLiteral: false
            }
        ],
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'arrow-spacing': [
            'error',
            {
                after: true,
                before: true
            }
        ],
        'block-scoped-var': 'off',
        'block-spacing': [
            'error',
            'never'
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        camelcase: [
            'warn',
            {
                allow: [],
                ignoreDestructuring: false,
                ignoreGlobals: false,
                ignoreImports: false,
                properties: 'always'
            }
        ],
        'capitalized-comments': 'off',
        'class-methods-use-this': 'warn',
        'comma-dangle': [
            'error',
            'never'
        ],
        'comma-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'comma-style': [
            'error',
            'last'
        ],
        complexity: 'off',
        'computed-property-spacing': [
            'error',
            'never',
            {
                enforceForClassMembers: true
            }
        ],
        'consistent-return': 'off',
        'consistent-this': [
            'warn',
            'me'
        ],
        'constructor-super': 'error',
        curly: [
            'error',
            'all'
        ],
        'default-case': 'off',
        'default-case-last': 'error',
        'default-param-last': 'warn',
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': 'error',
        'eol-last': [
            'error',
            'always'
        ],
        eqeqeq: [
            'error',
            'always'
        ],
        'for-direction': 'error',
        'func-call-spacing': [
            'error',
            'never'
        ],
        'func-name-matching': [
            'warn',
            'always',
            {
                considerPropertyDescriptor: true,
                includeCommonJSModuleExports: false
            }
        ],
        'func-names': [
            'error',
            'never',
            {
                generators: 'never'
            }
        ],
        'func-style': [
            'error',
            'expression'
        ],
        'function-call-argument-newline': [
            'error',
            'consistent'
        ],
        'function-paren-newline': [
            'error',
            'consistent'
        ],
        'generator-star-spacing': [
            'error',
            'after'
        ],
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        'grouped-accessor-pairs': [
            'error',
            'getBeforeSet'
        ],
        'guard-for-in': 'warn',
        'id-denylist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': [
            'error',
            'beside'
        ],
        indent: [
            'error',
            4,
            {
                ArrayExpression: 1,
                CallExpression: {
                    arguments: 1
                },
                flatTernaryExpressions: false,
                FunctionDeclaration: {
                    body: 1,
                    parameters: 1
                },
                FunctionExpression: {
                    body: 1,
                    parameters: 1
                },
                ignoreComments: false,
                ignoredNodes: [
                    'CallExpression[callee.object.type=\'TemplateLiteral\'] *',
                    'TemplateLiteral *'
                ],
                ImportDeclaration: 1,
                MemberExpression: 1,
                ObjectExpression: 1,
                offsetTernaryExpressions: false,
                outerIIFEBody: 1,
                SwitchCase: 1,
                VariableDeclarator: 1
            }
        ],
        'init-declarations': 'off',
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        'key-spacing': [
            'error',
            {
                afterColon: true,
                beforeColon: false,
                mode: 'strict'
            }
        ],
        'keyword-spacing': [
            'error',
            {
                after: true,
                before: true,
                overrides: {}
            }
        ],
        'line-comment-position': 'off',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-comment': 'off',
        'lines-between-class-members': [
            'error',
            'never',
            {
                exceptAfterSingleLine: false
            }
        ],
        'max-classes-per-file': [
            'error',
            1
        ],
        'max-depth': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': [
            'error',
            {
                max: 1
            }
        ],
        'multiline-comment-style': [
            'warn',
            'bare-block'
        ],
        'multiline-ternary': [
            'error',
            'always'
        ],
        'new-cap': 'warn',
        'new-parens': 'error',
        'newline-per-chained-call': 'off',
        'no-alert': 'warn',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'off',
        'no-bitwise': 'warn',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true
            }
        ],
        'no-console': 'warn',
        'no-const-assign': 'error',
        'no-constant-condition': 'warn',
        'no-constructor-return': 'error',
        'no-continue': 'off',
        'no-control-regex': 'off',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'off',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': [
            'error',
            {
                includeExports: true
            }
        ],
        'no-else-return': [
            'error',
            {
                allowElseIf: true
            }
        ],
        'no-empty': 'warn',
        'no-empty-character-class': 'error',
        'no-empty-function': [
            'error',
            {
                allow: []
            }
        ],
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'off',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': [
            'error',
            'all',
            {
                conditionalAssign: true,
                enforceForArrowConditionals: false,
                enforceForFunctionPrototypeMethods: true,
                enforceForNewInMemberExpressions: true,
                enforceForSequenceExpressions: true,
                ignoreJSX: 'none',
                nestedBinaryExpressions: true,
                returnAssign: true
            }
        ],
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'off',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': [
            'error',
            {
                boolean: false,
                number: false,
                string: true
            }
        ],
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-import-assign': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': [
            'warn',
            {
                capIsConstructor: false
            }
        ],
        'no-irregular-whitespace': [
            'error',
            {
                skipComments: false,
                skipRegExps: false,
                skipStrings: false,
                skipTemplates: false
            }
        ],
        'no-iterator': 'error',
        'no-label-var': 'warn',
        'no-labels': [
            'error',
            {
                allowLoop: true,
                allowSwitch: false
            }
        ],
        'no-lone-blocks': 'warn',
        'no-lonely-if': 'warn',
        'no-loop-func': 'error',
        'no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        'no-misleading-character-class': 'error',
        'no-mixed-operators': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1
            }
        ],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'off',
        'no-new': 'warn',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-plusplus': 'error',
        'no-promise-executor-return': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'off',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-reserved-keys': 'off',
        'no-restricted-exports': 'off',
        'no-restricted-globals': [
            'error',
            {
                message: 'Use isotropic-error instead.',
                name: 'AggregateError'
            },
            {
                message: 'Use isotropic-error instead.',
                name: 'Error'
            },
            {
                message: 'Use isotropic-error instead.',
                name: 'EvalError'
            },
            {
                message: 'Use isotropic-error instead.',
                name: 'InternalError'
            },
            {
                message: 'Use Number.isNaN instead.',
                name: 'isNaN'
            },
            {
                message: 'Use isotropic-error instead.',
                name: 'RangeError'
            },
            {
                message: 'Use isotropic-error instead.',
                name: 'ReferenceError'
            },
            {
                message: 'Use isotropic-later instead.',
                name: 'setImmediate'
            },
            {
                message: 'Use isotropic-later instead.',
                name: 'setInterval'
            },
            {
                message: 'Use isotropic-later instead.',
                name: 'setTimeout'
            },
            {
                message: 'Use isotropic-error instead.',
                name: 'SyntaxError'
            },
            {
                message: 'Use isotropic-error instead.',
                name: 'TypeError'
            },
            {
                message: 'Use isotropic-error instead.',
                name: 'URIError'
            }
        ],
        'no-restricted-imports': 'off',
        'no-restricted-properties': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'warn',
        'no-self-assign': [
            'error',
            {
                props: true
            }
        ],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-setter-return': 'error',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'warn',
        'no-tabs': [
            'error',
            {
                allowIndentationTabs: false
            }
        ],
        'no-template-curly-in-string': 'warn',
        'no-ternary': 'off',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': [
            'error',
            {
                ignoreComments: false,
                skipBlankLines: false
            }
        ],
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-underscore-dangle': 'off',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'warn',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'warn',
        'no-unsafe-negation': [
            'error',
            {
                enforceForOrderingRelations: true
            }
        ],
        'no-unsafe-optional-chaining': [
            'error',
            {
                disallowArithmeticOperators: true
            }
        ],
        'no-unused-expressions': 'warn',
        'no-unused-labels': 'warn',
        'no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                caughtErrors: 'none',
                ignoreRestSiblings: true,
                vars: 'all'
            }
        ],
        'no-use-before-define': [
            'error',
            {
                classes: true,
                functions: true,
                variables: true
            }
        ],
        'no-useless-backreference': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': [
            'error',
            {
                enforceForClassMembers: true
            }
        ],
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreExport: false,
                ignoreImport: false
            }
        ],
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'off',
        'no-warning-comments': [
            'warn',
            {
                location: 'start',
                terms: [
                    'todo'
                ]
            }
        ],
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': [
            'error',
            'beside'
        ],
        'object-curly-newline': [
            'error',
            {
                consistent: true,
                minProperties: 1,
                multiline: true
            }
        ],
        'object-curly-spacing': [
            'error',
            'never'
        ],
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: false
            }
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                avoidExplicitReturnArrows: false,
                avoidQuotes: false,
                ignoreConstructors: false
            }
        ],
        'one-var': [
            'error',
            'always'
        ],
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        'operator-assignment': [
            'error',
            'always'
        ],
        'operator-linebreak': [
            'error',
            'after'
        ],
        'padded-blocks': [
            'error',
            'never',
            {
                allowSingleLineBlocks: false
            }
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: '*',
                prev: [
                    'block',
                    'block-like'
                ]
            },
            {
                blankLine: 'always',
                next: '*',
                prev: [
                    'const',
                    'let',
                    'var'
                ]
            },
            {
                blankLine: 'always',
                next: '*',
                prev: 'directive'
            },
            {
                blankLine: 'any',
                next: 'directive',
                prev: 'directive'
            },
            {
                blankLine: 'never',
                next: 'case',
                prev: '*'
            }
        ],
        'prefer-arrow-callback': 'warn',
        'prefer-const': [
            'warn',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true
            }
        ],
        'prefer-destructuring': 'off',
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'error',
        'prefer-template': 'warn',
        'quote-props': [
            'error',
            'as-needed'
        ],
        quotes: [
            'warn',
            'single'
        ],
        radix: 'error',
        'require-atomic-updates': 'off', // https://github.com/eslint/eslint/issues/11899
        'require-await': 'warn',
        'require-unicode-regexp': 'error',
        'require-yield': 'warn',
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        semi: [
            'error',
            'always',
            {
                omitLastInOneLineBlock: false
            }
        ],
        'semi-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'semi-style': [
            'error',
            'last'
        ],
        'sort-imports': [
            'error',
            {
                allowSeparatedGroups: false,
                ignoreCase: true,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: [
                    'none',
                    'all',
                    'multiple',
                    'single'
                ]
            }
        ],
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            'always'
        ],
        'space-in-brackets': 'off',
        'space-in-parens': 'off',
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                nonwords: false,
                words: true
            }
        ],
        'spaced-comment': [
            'warn',
            'always'
        ],
        strict: [
            'error',
            'global'
        ],
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'symbol-description': 'error',
        'template-curly-spacing': [
            'error',
            'never'
        ],
        'template-tag-spacing': [
            'error',
            'never'
        ],
        'unicode-bom': [
            'error',
            'never'
        ],
        'use-isnan': [
            'error',
            {
                enforceForIndexOf: true,
                enforceForSwitchCase: true
            }
        ],
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: false
            }
        ],
        'vars-on-top': 'off',
        'wrap-iife': [
            'error',
            'outside',
            {
                functionPrototypeMethods: true
            }
        ],
        'wrap-regex': 'off',
        'yield-star-spacing': [
            'error',
            'after'
        ],
        yoda: [
            'error',
            'never',
            {
                exceptRange: false,
                onlyEquality: false
            }
        ]
    };

export {
    _globals as globals,
    _noInlineConfig as noInlineConfig,
    _reportUnusedDisableDirectives as reportUnusedDisableDirectives,
    _rules as rules
};
