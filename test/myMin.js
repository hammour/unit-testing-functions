var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should return 15 if input is 15 & 20', function() {
		expect(functions.myMin(15,20)).to.equal(15);
	});
	it('should return Invalid Inputs are not  numbers', function() {
		expect(function(){functions.myMin('abc',3)}).to.throw('Invalid Input');
	});
	it('should return  a number', function() {
		expect(functions.myMin(-11,20)).to.be.a('number');
	});
});