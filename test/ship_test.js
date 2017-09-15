var expect = require('chai').expect;


// Remember, mocha's representation of a test suite
// is the describe function, which takes a string describing 
// all the tests inside and a function to wrap them all together

describe('checkForShip', function () {
    // Import checkForShip function because all the tests described in this suite will need
    // access to it
    var checkForShip = require('../game_logic/ship_methods.js').checkForShip
    // Remember, the test will break at first because the function we are testing here
    // doesn't exisit yet
    
    // In mocha, a spec looks similar to a suite: it takes two arguments:
    // 1) a string describing our desired behavior
    // 2) and a function that wraps all of the spec, expectations, and logic up together
    // Each spec should just be responsible for just one aspect of the function's behavior
    it('should correctly report no ship at a given players coordinate', function (){

        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };

        expect(checkForShip(player, [9, 9])).to.be.false;
    });
});