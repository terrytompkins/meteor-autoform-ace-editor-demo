/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var stuffSeeds = [
  {name: "Basket", quantity: 3, notes: "Notes for Basket", jsonEditor: "{}"},
  {name: "Bicycle", quantity: 2, notes: "Notes for Bicycle", jsonEditor: "{}"}
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds,  function(stuff) {
    Stuff.insert(stuff);
  });
}
