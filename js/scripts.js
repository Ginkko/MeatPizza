var toppings = [];

function Pizza(name, size) {
  this.name = name;
  this.size = size;
}

function Topping(name, price) {
  this.name = name;
  this.price = price;
}

var populateDB = function() {

  var topping0 = new Topping("Pepperoni", 1);
  toppings.push(topping0);
  var topping1 = new Topping("Bacon", 1.5);
  toppings.push(topping1);
  var topping2 = new Topping("Prosciutto", 3);
  toppings.push(topping2);
  var topping3 = new Topping("Ground Beef", 1.5);
  toppings.push(topping3);
  var topping4 = new Topping("Sausage", 1);
  toppings.push(topping4);
  var topping5 = new Topping("Salami", 2);
  toppings.push(topping5);

}
