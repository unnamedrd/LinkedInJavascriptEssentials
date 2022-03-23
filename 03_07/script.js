/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
 
const purse = {
    name: 'mini-backpack',
    color: 'blue',
    brand: 'Generic',
    strapLength: {
        left: 26, 
        right: 26,
    },
    flapOpen: false,
    togglePurse: function(flapStatus) {
        this.flapOpen = flapStatus; 
    },
};
 
var query = 'name';

console.log(purse[query])