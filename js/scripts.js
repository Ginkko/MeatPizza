var toppingList = [];

function Order(name, type) {
  this.name = name;
  this.type = type;
  this.pizzas = [];
  this.cost = 0
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.price = function() {
  for (var i = 0; i < this.pizzas.length; i++) {
    var pizza = this.pizzas[i];

    if (pizza.size === 12) {
     this.cost += 14;
    } else if (pizza.size === 16) {
      this.cost += 20;
    } else if (pizza.size === 18) {
      this.cost += 22;
    }
    for (var j = 0; j < pizza.toppings.length; j++) {
      var topping = pizza.toppings[j];

      if (pizza.size === 12){
        this.cost += (topping.price * .75);
      } else if (pizza.size === 16) {
        this.cost += topping.price;
      } else if (pizza.size === 18) {
        this.cost += (topping.price * 1.25);
      }
    }
  }
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
