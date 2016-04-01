var expect = require('chai').expect;
var functions = require('../functions.js');



//testing first function
describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
	it('should return true if input is "abc"', function() {
		expect(functions.checkData('abc')).to.be.true;
	});
	it('should return false if input is "abcdef"', function() {
		expect(functions.checkData('abcdef')).to.be.false;
	});
});



