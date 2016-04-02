var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	it('should return Hay if input is ("Haythem",0,3)', function() {
		expect(functions.mySubstring("Haythem",0,3)).to.equal('Hay');
	});
	it('should return Invalid Input if not a string and two numbers', function() {
		expect(function(){functions.mySubstring(123,'a',3)}).to.throw('Invalid Input');
	});
	it('should be a string', function() {
		expect(functions.mySubstring("Haythem",0,3)).to.be.a('string');
	});
});

