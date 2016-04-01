var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should return 30 if input is [15 , 20, 30 , 9]', function() {
		expect(functions.myMax([15 , 20, 30 , 9])).to.equal(30);
	});
	it('should return Invalid Inputs are not  numbers', function() {
		expect(function(){functions.myMax([15 , 'b', 30 , 'a'])}).to.throw('Invalid Input');
	});
	it('should return  a number', function() {
		expect(functions.myMax([15 , 20, 30 , 9])).to.be.a('number');
	});
});