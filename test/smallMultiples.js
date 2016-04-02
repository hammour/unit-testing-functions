var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('smallMultiples', function() {
	it('should exist', function() {
		expect(functions.smallMultiples).not.to.be.undefined;
	});
	it('should return 3 if input is 4,1', function() {
		expect(functions.smallMultiples(4,1)).to.equal(3);
	});
	it('should return Invalid Inputs is not a numbers', function() {
		expect(function(){functions.smallMultiples(15 , 'b')}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs is number is negative', function() {
		expect(function(){functions.smallMultiples(-15)}).to.throw('Invalid Input');
	});
	it('should return  a number', function() {
		expect(functions.smallMultiples(4,1)).to.be.a('number');
	});
});