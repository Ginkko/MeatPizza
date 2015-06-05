describe('Order', function () {
  it('creats a new Order object with the appropriate attributes', function () {
    var testOrder = new Order('Meat-Co', 'Pick-up');
    expect(testOrder.name).to.equal('Meat-Co');
    expect(testOrder.type).to.equal('Pick-up');
  });

  describe('addPizza', function() {
    it('adds the pizza to the current order', function () {
      var testOrder = new Order('Epicodus', 'Delivery');
      var testPizza = new Pizza('Hoboken Heart Attack', 18);
      testOrder.addPizza(testPizza);
      expect(testOrder.pizzas).to.eql([testPizza]);
    });
  });

  describe('price', function() {
    it('caclulates the price based on the pizza and toppings', function () {
      var testOrder = new Order('Meat-Co', 'Pick-up');
      var testPizza = new Pizza('Meat-Mountain', 16);
      var testTopping0 = new Topping('Lots of meat', 4);
      var testTopping1 = new Topping('More meat', 3);
      testPizza.addTopping(testTopping0);
      testPizza.addTopping(testTopping1);
      testPizza.price();
      expect(testPizza.cost).to.equal(27);
    });

    it('supports 18" pizza size', function () {
      var testOrder = new Order('Meat-Co', 'Pick-up');
      var testPizza = new Pizza('Meat-Mountain', 18);
      var testTopping0 = new Topping('Lots of meat', 4);
      var testTopping1 = new Topping('More meat', 3);
      testPizza.addTopping(testTopping0);
      testPizza.addTopping(testTopping1);
      testPizza.price();
      expect(testPizza.cost).to.equal(30.75);
    });

    it('supports 12" pizza size', function () {
      var testOrder = new Order('Meat-Co', 'Pick-up');
      var testPizza = new Pizza('Meat-Mountain', 12);
      var testTopping0 = new Topping('Lots of meat', 4);
      var testTopping1 = new Topping('More meat', 3);
      testPizza.addTopping(testTopping0);
      testPizza.addTopping(testTopping1);
      testPizza.price();
      expect(testPizza.cost).to.equal(19.25);
    });

    it('supports delivery type orders', function () {
      var testOrder = new Order('Meat-Co', 'Delivery');
      var testPizza = new Pizza('Meat-Mountain', 12);
      var testTopping0 = new Topping('Lots of meat', 4);
      var testTopping1 = new Topping('More meat', 3);
      testPizza.addTopping(testTopping0);
      testPizza.addTopping(testTopping1);
      testPizza.price();
      testOrder.addPizza(testPizza);
      testOrder.price();
      expect(testOrder.cost).to.equal(21.25);
    });
  });
});

describe('Pizza', function () {
  it('creates a new Pizza object with the appropriate attributes', function () {
      var testPizza = new Pizza('Megga-Za', 16);
      expect(testPizza.name).to.equal('Megga-Za');
      expect(testPizza.size).to.equal(16);
    });

    describe('addTopping', function() {
      it('adds the topping to the current pizza', function () {
        var testPizza = new Pizza('Meat-Mountain', 16);
        var testTopping0 = new Topping('Lots of meat', 4);
        var testTopping1 = new Topping('More meat', 3);
        testPizza.addTopping(testTopping0);
        testPizza.addTopping(testTopping1);
        expect(testPizza.toppings).to.eql([testTopping0, testTopping1]);
      });
    });

    describe('price', function() {
      it('caclulates the price based on the pizza and toppings', function () {
        var testPizza = new Pizza('Meat-Mountain', 16);
        var testTopping0 = new Topping('Lots of meat', 4);
        var testTopping1 = new Topping('More meat', 3);
        testPizza.addTopping(testTopping0);
        testPizza.addTopping(testTopping1);
        testPizza.price();
        expect(testPizza.cost).to.equal(27);
      });
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
    expect(toppingList.length).to.equal(6)
  });
});
