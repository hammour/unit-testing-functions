var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('cfixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	it('should return Haythem if input is "haythem"', function() {
		expect(functions.fixProperNoun('haythem')).to.equal('Haythem');
	});
	it('should return Invalid Input if not a string', function() {
		expect(function(){functions.fixProperNoun(123)}).to.throw('Invalid Input');
	});
	it('should be a string', function() {
		expect(functions.fixProperNoun('haythem')).to.be.a('string');
	});
});

