var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('should return Invalid Input if an empty Array', function() {
		expect(function(){functions.studentPairs([])}).to.throw('Invalid Input');
	});
	it('should return Invalid Inputs is not an Array', function() {
		expect(function(){functions.studentPairs('a')}).to.throw('Invalid Input');
	});
	it('should return  an Array', function() {
		expect(functions.studentPairs(['Haythem', 'Hisham', 'Rasha', 'Rayan'])).to.be.a('array');
	});
	it('should return Invalid Inputs if array does not contain an even number of Students', function() {
		expect(function(){functions.studentPairs(['Haythem', 'Hisham', 'Rasha'])}).to.throw('Invalid Input');
	});
});