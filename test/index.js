'use strict';

var assert = require('chai').assert;

process.env.EXISTING = 'existing_value';
process.env.NOT_IN_FILE = 'not_in_file';

var app = require('../index');

describe('Parse', function() {
  describe('#EXISTING', function() {
    it('should parse the original value even if overriden on .env.test', function() {
      assert.equal(process.env.EXISTING, 'existing_value');
    });
  });

  describe('#NOT_IN_FILE', function() {
    it('should parse a value even if not present on .env.test', function() {
      assert.equal(process.env.NOT_IN_FILE, 'not_in_file');
    });
  });

  describe('#EMPTY', function() {
    it('should parse an empty string', function() {
      assert.equal(process.env.EMPTY, '');
    });
  });

  describe('#SIMPLE', function() {
    it('should parse a simple string', function() {
      assert.equal(process.env.SIMPLE, 'simple');
    });
  });

  describe('#DOLLAR_SIGN', function() {
    it('should parse the dollar sign', function() {
      assert.equal(process.env.DOLLAR_SIGN, '$dollar_sign');
    });
  });

  describe('#EQUAL_SIGN', function() {
    it('should parse the equal sign', function() {
      assert.equal(process.env.EQUAL_SIGN, 'equals=');
    });
  });

  describe('#URL', function() {
    it('should parse the full URL', function() {
      assert.equal(process.env.URL, 'mongodb://aaa.bbb.ccc.ddd:pppp/db-name');
    });
  });

  describe('#EMAIL', function() {
    it('should parse a valid email address', function() {
      assert.equal(process.env.EMAIL, 'nicolasrotta@gmail.com');
    });
  });

  describe('#SINGLE_QUOTES', function() {
    it('should parse the single quotes', function() {
      assert.equal(process.env.SINGLE_QUOTES, '\'single\'');
    });
  });

  describe('#DOUBLE_QUOTES', function() {
    it('should parse the double quotes', function() {
      assert.equal(process.env.DOUBLE_QUOTES, '"double"');
    });
  });
});
