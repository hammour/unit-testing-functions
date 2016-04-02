var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});
	it('should return 14 if input is 3', function() {
		expect(functions.sumSquares(3)).to.equal(14);
	});
	it('should return Invalid Inputs is not a numbers', function() {
		expect(function(){functions.sumSquares([15 , 'b', 30 , 'a'])}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs is number is negative', function() {
		expect(function(){functions.sumSquares(-15)}).to.throw('Invalid Input');
	});
	it('should return  a number', function() {
		expect(functions.sumSquares(10)).to.be.a('number');
	});
});