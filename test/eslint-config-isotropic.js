import * as _eslintConfigIsotropic from '../js/eslint-config-isotropic.js';
import _chai from 'isotropic-dev-dependencies/lib/chai.js';
import _mocha from 'isotropic-dev-dependencies/lib/mocha.js';

_mocha.describe('eslint-config-isotropic', () => {
    _mocha.it('should be a shared eslint config object', () => {
        _chai.expect(_eslintConfigIsotropic).to.be.an('object');
        _chai.expect(_eslintConfigIsotropic).not.to.have.property('ecmaFeatures');
        _chai.expect(_eslintConfigIsotropic).not.to.have.property('env');
        _chai.expect(_eslintConfigIsotropic).to.have.property('globals').that.is.an('object');
        _chai.expect(_eslintConfigIsotropic).not.to.have.property('parserOptions');
        _chai.expect(_eslintConfigIsotropic).not.to.have.property('root');
        _chai.expect(_eslintConfigIsotropic).to.have.property('rules').that.is.an('object');

        Object.keys(_eslintConfigIsotropic.rules).forEach(ruleName => {
            let setting = _eslintConfigIsotropic.rules[ruleName];

            if (Array.isArray(setting)) {
                setting = setting[0];
            }

            _chai.expect(setting).to.be.oneOf([
                'error',
                'off',
                'warn'
            ]);
        });
    });

    _mocha.it('should ignore the indent rule in template literals', () => {
        // This test doesn't assert anything useful but the pretest lint script will fail if this doesn't pass

        const arrowFunctionA = string => `
                abx ${
                    string
                } xcv
            `.replace(/.*/u, match => ({
                a: 'multiline',
                function: 'body'
            }[match])),
            arrowFunctionB = string => `${
                string
            }`.replace(/.*/u, match => ({
                a: 'multiline',
                function: 'body'
            }[match])),
            string = 'abc',
            text = `
                this is some structure {
                    that has its own indentation {
                        separate from the containing code {
                            and it contains code in a placeholder {
                                ${
                                    string === 'abc' ?
                                        arrowFunctionA(string) :
                                        arrowFunctionB(string)
                                }
                            }
                        }
                    }
                }
            `;

        _chai.expect(text).to.be.a.string;
    });
});
