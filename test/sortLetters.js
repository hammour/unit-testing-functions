var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should return Haythem if input is "haythem"', function() {
		expect(functions.sortLetters('cba')).to.equal('abc');
	});
	it('should return Invalid Input if not a string', function() {
		expect(function(){functions.sortLetters(123)}).to.throw('Invalid Input');
	});
	it('should be a string', function() {
		expect(functions.sortLetters('haythem')).to.be.a('string');
	});
});