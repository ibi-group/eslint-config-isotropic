import * as eslintConfigIsotropic from '../js/eslint-config-isotropic.js';

import {
    describe,
    it
} from 'mocha';

import {
    expect
} from 'chai';

describe('eslint-config-isotropic', () => {
    it('should be a shared eslint config object', () => {
        expect(eslintConfigIsotropic).to.be.an('object');
        expect(eslintConfigIsotropic).not.to.have.property('ecmaFeatures');
        expect(eslintConfigIsotropic).not.to.have.property('env');
        expect(eslintConfigIsotropic).to.have.property('globals').that.is.an('object');
        expect(eslintConfigIsotropic).not.to.have.property('parserOptions');
        expect(eslintConfigIsotropic).not.to.have.property('root');
        expect(eslintConfigIsotropic).to.have.property('rules').that.is.an('object');
    });
});
