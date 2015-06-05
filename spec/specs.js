describe('Pizza', function () {
  it('creates a new Pizza object with the appropriate attributes', function () {
      var testPizza = new Pizza('Megga-Za', 16);
      expect(testPizza.name).to.equal('Megga-Za');
      expect(testPizza.size).to.equal(16);
    });
  });

describe('Topping', function() {
  it('creates a new Topping object with the appropriate attributes', function () {
    var testTopping = new Topping('Pepperoni', 1);
    expect(testTopping.name).to.equal('Pepperoni');
    expect(testTopping.price).to.equal(1);
  });
});

describe('populateDB', function() {
  it('populates the topping list with pre-selected toppings', function () {
    populateDB();
    expect(toppings.length).to.equal(6)
  });
});
