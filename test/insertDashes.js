var expect = require('chai').expect;
var should = require('chai').should;
var functions = require('../functions.js');

//testing first function
describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should return H-a-y-t-h-e-m H-a-m-m-o-u-r if input is "Haythem Hammour"', function() {
		expect(functions.insertDashes('Haythem Hammour')).to.equal('H-a-y-t-h-e-m H-a-m-m-o-u-r');
	});
	it('should return Invalid Input if not a string', function() {
		expect(function(){functions.insertDashes(123)}).to.throw('Invalid Input');
	});
	it('should be a string', function() {
		expect(functions.insertDashes('Haythem Hammour')).to.be.a('string');
	});
});

