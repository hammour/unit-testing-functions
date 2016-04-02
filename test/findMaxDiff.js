var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should return 30 if input is [15 , 20, 30 , 9]', function() {
		expect(functions.findMaxDiff([15 , 20, 30 , 1])).to.equal(29);
	});
	it('should return Invalid Inputs are not  numbers', function() {
		expect(function(){functions.findMaxDiff([15 , 'b', 30 , 'a'])}).to.throw('Invalid Input');
	});
	it('should return  a number', function() {
		expect(functions.findMaxDiff([15 , 20, 30 , 9])).to.be.a('number');
	});
});