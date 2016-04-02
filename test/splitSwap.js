var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('splitSwap', function() {
	it('should exist', function() {
		expect(functions.splitSwap).not.to.be.undefined;
	});
	it('should return first element 30 if input is [15 , 20, 30 , 9]', function() {
		expect(functions.splitSwap([15 , 20, 30 , 9])[0]).to.equal(30);

	});
	
	it('should return first element 9 if input is [15 , 20, 30 , 9, 4]', function() {
	expect(functions.splitSwap([15 , 20, 30 , 9, 4])[0]).to.equal(9);
	});
	
	it('should be an array', function() {
		expect(functions.splitSwap([1,2,3,4,5,6])).to.be.a('array');
	});
});