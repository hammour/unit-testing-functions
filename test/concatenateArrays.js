var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});
	it('should return [1,2,3,4,5,6] if input is "a = [1,2,3], b=[4,5,6]]"', function() {
		expect(functions.concatenateArrays([1,2,3],[4,5,6])[3]).to.equal(4);
	});
	it('should return Invalid Input if type of a is not an array', function() {
		expect(function(){functions.concatenateArrays(123,'a')}).to.throw('Invalid Input');
	});
	it('should be an array', function() {
		expect(functions.concatenateArrays([1,2,3],[4,5,6])).to.be.a('array');
	});
});


