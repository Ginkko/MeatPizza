var toppingList = [];

function Order(name, type) {
  this.name = name;
  this.type = type;
  this.pizzas = [];
}

function Pizza(name, size) {
  this.name = name;
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

function Topping(name, price) {
  this.name = name;
  this.price = price;
}

var populateDB = function() {

  var topping0 = new Topping("Pepperoni", 1);
  toppingList.push(topping0);
  var topping1 = new Topping("Bacon", 1.5);
  toppingList.push(topping1);
  var topping2 = new Topping("Prosciutto", 3);
  toppingList.push(topping2);
  var topping3 = new Topping("Ground Beef", 1.5);
  toppingList.push(topping3);
  var topping4 = new Topping("Sausage", 1);
  toppingList.push(topping4);
  var topping5 = new Topping("Salami", 2);
  toppingList.push(topping5);

}
