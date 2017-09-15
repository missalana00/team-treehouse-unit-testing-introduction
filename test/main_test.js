// Test to run to check if mocha is installed correctly
// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });


// Import Chai so we can use it as an expectation here
var expect = require('chai').expect;

// Test Suite

// Sanity check - a trivial function or test that proves we set things up correctly
describe('Mocha', function () {
    // "describe" is a mocha function that groups similar test specs together

    it('should run our tests using npm', function() {
        // Test spec (unit test)- "it" is a mocha function that groups similar expectations together,
        // representing a single unit test
       // An expectation gives a specific state condition for a test to count as passing
       // Otherwise, it throws an error
       expect(true).to.be.ok;
       // "ok" is an assertion value in chai that tests if a value is truthy
       // "truthy" is any value besides undefined, NaN, false, "", or 0
    });
});