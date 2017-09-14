// Import the stuff you want to use from the Chai library
// Just want to use the 'expect' method from the Chai library for now
// Must require it in 
var expect = require('chai').expect; 
// Now node will know to go look for this package in our node modules directory
// Above code is just a simpler way to write the following:
// var chai = require('chai);
// var expect = chai.expect;

// we say 'expect' and then pass in a value we wan to use for comparison, then we chain some special
// chai methods to tell chai what we expect that value to be

// expect(true).to.be.false;
// Will obviously fail because true does not equal false
// to run test run node textUtilities.js in terminal 
// corrected:
// expect(true).to.be.true;

function titleCase (title) {
    var words = title.split(' ');
    var titleCasedWords = words.map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
    });

    return titleCasedWords.join(' ');
};

expect(titleCase('the great mouse detective')).to.be.a('string');

expect(titleCase('a')).to.equal('A');

expect(titleCase('vertigo')).to.equal('Vertigo');

// In testing, the most comprehensive test of the function should be written last; 
// all simpler tests it can be broken down into should come first 
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');