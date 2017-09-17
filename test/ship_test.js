var expect = require('chai').expect;

// Remember, mocha's representation of a test suite
// is the describe function, which takes a string describing 
// all the tests inside and a function to wrap them all together

describe('checkForShip', function () {

    // Import checkForShip function because all the tests described in this suite will need
    // access to it
    var checkForShip = require('../game_logic/ship_methods.js').checkForShip;
    var player;
    
    // Function that runs before any of our test specs to setup any state they need
    // Now all the tests in the checkForShip suite will use this object and it
    // will work for both the simple and complex tests
    before(function () {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        };
    }); 
    
    // Remember, the test will break at first because the function we are testing here
    // doesn't exisit yet
    
    // In mocha, a spec looks similar to a suite: it takes two arguments:
    // 1) a string describing our desired behavior
    // 2) and a function that wraps all of the spec, expectations, and logic up together
    // Each spec should just be responsible for just one aspect of the function's behavior
    it('should correctly report no ship at a given players coordinates', function () {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report a ship located at the given coordinates', function () {
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });
    
    it('should handle ships located at more than one coordinate', function () {

        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should handle checking multiple ships', function () {
        
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]); 
        expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    })
});

describe('damageShip', function () {
    var damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage on a given ship at a given location', function () {
        var ship = {
            locations: [[0, 0]],
            damage: []
        };

        damageShip(ship, [0, 0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
});

// 'fire' is not a pure function; it has side effects in other parts of our code base
describe('fire', function () {
    var fire = require('../game_logic/ship_methods').fire;
    var player;

    // beforeEach works just like before, except it will run the function 
    // before each spec instead of just once at the start of the whole suite
    beforeEach(function () {
        // player object will be overwritten before each test
        player = {
            ships: [
                {
                    locations: [[0, 0]],
                    damage: []
                }
            ]
        };
    });

    after(function() {
        console.log('Entire test suite completed');
    });

    afterEach(function () {
        console.log('One unit test completed');
    });

    it('should record damage on the given players ship at a given coordinate', function () {
       
         fire(player, [0, 0]);

        expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
    });

    it('should NOT record damage if there is no ship at my coordinates', function () {
       
        fire(player, [9, 9]);

        expect(player.ships[0].damage).to.be.empty;
    });
});


// Teardown: 
// Mocha provides a "teardown" phase to remove unwanted variables
// If your tests change your development environment, like creating a pretend database, 
// or start up a local server, you can use the teardown block to set your system back to where 
// it started
// Mocha's after() and afterEach() hooks work exactly like before() and beforeEach(), 
// except that they happen after
// If you find yourself depending heavily on the teardown phase, you should double-check 
// that you’re testing the right kind of function 

// Covering Edge Cases:
// An edge case is a radical situation your function might end up in, but it isn’t how your 
// function would normally work
// Edge cases occur at an extreme (maximum or minimum) operating parameter
// Predicting edge cases can be challenging
// Spend a little time thinking about the edge cases that are most likely to come up