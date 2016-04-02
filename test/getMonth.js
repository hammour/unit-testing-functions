var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
	it('should return March if input is 3', function() {
		expect(functions.getMonth(3)).to.equal('March');
	});
	it('should return Invalid Inputs are not  numbers', function() {
		expect(function(){functions.getMonth('a')}).to.throw('Invalid Input');
	});
	it('should return  a String', function() {
		expect(functions.getMonth(4)).to.be.a('string');
	});
	it('should return Invalid Inputs if out of range (i.e 14)', function() {
		expect(function(){functions.getMonth(14)}).to.throw('Invalid Input');
	});
});