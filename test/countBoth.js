var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('countBoth', function() {
	it('should exist', function() {
		expect(functions.countBoth).not.to.be.undefined;
	});
	it('should return Invalid Input if an empty Array', function() {
		expect(function(){functions.countBoth([],[])}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs is not an Array', function() {
		expect(function(){functions.countBoth('a',12)}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs is not an Array', function() {
		expect(function(){functions.countBoth(12,'a')}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs if one of the arrays contains a string', function() {
		expect(function(){functions.countBoth(['Haythem', 1, 2],[1,2,3])}).to.throw('Invalid Input');
	});
	it('should return  a number', function() {
		expect(functions.countBoth([1,2,3],[3,4,5])).to.be.a('number');
	});
	it('should return 6 if input is [1,2,3],[3,4,5]', function() {
		expect(functions.countBoth([1,2,3],[3,4,5])).to.equal(6);
	});
});