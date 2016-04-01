var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should return 9 if input is -9', function() {
		expect(functions.absVal(-9)).to.equal(9);
	});
	it('should return Invalid Input if not a number', function() {
		expect(function(){functions.absVal('abc')}).to.throw('Invalid Input');
	});
	it('should be a number', function() {
		expect(functions.absVal(-11)).to.be.a('number');
	});
});