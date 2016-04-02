var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	
	
	it('should never return Nan', function() {
		expect(functions.randomElement([1,2,3,4,5,6])).not.to.be.NaN;;
	});
	it('should return Invalid Inputs if is not an array', function() {
		expect(function(){functions.randomElement(14)}).to.throw('Invalid Input');
	});
});