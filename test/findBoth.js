var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('findBoth', function() {
	it('should exist', function() {
		expect(functions.findBoth).not.to.be.undefined;
	});
	it('should return Invalid Input if an empty Array', function() {
		expect(function(){functions.findBoth([],[])}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs is not an Array', function() {
		expect(function(){functions.findBoth('a',12)}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs is not an Array', function() {
		expect(function(){functions.findBoth(12,'a')}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs if one of the arrays contains a string', function() {
		expect(function(){functions.findBoth(['Haythem', 1, 2],[1,2,3])}).to.throw('Invalid Input');
	});
	it('should return [3,5,7] if input is [1,2,3,5,7,5],[7,8,3,4,5,5,7] ', function() {
		expect(functions.findBoth([1,2,3,5,7,5],[7,8,3,4,5,5,7])).to.eql([3,5,7]);
	});
	// it('should return 6 if input is [1,2,3],[3,4,5]', function() {
	// 	expect(functions.findBoth([1,2,3],[3,4,5])).to.equal(6);
	// });
});