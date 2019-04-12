// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules
const JEasing = require('../index.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('Test JEasing:', () => {
  // Test the lib:
  describe('Test JEasing.VERSION and JEasing.noConflict:', () => {
    it('Expects JEasing.VERSION to return a string.', () => {
      expect(JEasing.VERSION).to.be.a('string');
    });
    it('Expects JEasing.noConflict to return a function.', () => {
      expect(JEasing.noConflict).to.be.a('function');
    });
  });

  describe('Test the JEasing methods:', () => {
    //
  });
});
