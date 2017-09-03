import * as eslintConfigIsotropic from '../js/eslint-config-isotropic.js';
import chai from 'chai';
import mocha from 'mocha';

mocha.describe('eslint-config-isotropic', () => {
    mocha.it('should be a shared eslint config object', () => {
        chai.expect(eslintConfigIsotropic).to.be.an('object');
        chai.expect(eslintConfigIsotropic).not.to.have.property('ecmaFeatures');
        chai.expect(eslintConfigIsotropic).not.to.have.property('env');
        chai.expect(eslintConfigIsotropic).to.have.property('globals').that.is.an('object');
        chai.expect(eslintConfigIsotropic).not.to.have.property('parserOptions');
        chai.expect(eslintConfigIsotropic).not.to.have.property('root');
        chai.expect(eslintConfigIsotropic).to.have.property('rules').that.is.an('object');

        Object.keys(eslintConfigIsotropic.rules).forEach(ruleName => {
            let setting = eslintConfigIsotropic.rules[ruleName];

            if (Array.isArray(setting)) {
                setting = setting[0];
            }

            chai.expect(setting).to.be.oneOf([
                'error',
                'off',
                'warn'
            ]);
        });
    });
});
