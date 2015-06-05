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
  this.cost = 0;

  if (this.type === "Delivery") {
    this.cost += 2;
  }

  for (var i = 0; i < this.pizzas.length; i++) {
    var currentPizza = this.pizzas[i];

    this.cost += (currentPizza.cost);

  }
}

function Pizza(name, size) {
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.cost = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.price = function() {
  this.cost = 0;


  if (this.size === 12) {
   this.cost += 14;
 } else if (this.size === 16) {
    this.cost += 20;
  } else if (this.size === 18) {
    this.cost += 22;
  }

  for (var i = 0; i < this.toppings.length; i++) {
    var topping = this.toppings[i];

    if (this.size === 12){
      this.cost += (topping.price * .75);
    } else if (this.size === 16) {
      this.cost += topping.price;
    } else if (this.size === 18) {
      this.cost += (topping.price * 1.25);
    }
  }
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


$(document).ready(function() {
  populateDB();

  $("form#newOrder").submit(function(event) {
    event.preventDefault();

    var orderName = $("input#orderName").val();
    var orderType = $("select#orderType").val();
    var order = new Order(orderName, orderType);

    $("#newOrder").fadeOut("slow");
    $("h2#orderName").prepend(order.name);
    $("#orderDetail").delay(500).fadeIn("slow");

    $("span#addPizza").on("click", function(){

      var pizzaName = $("input#pizzaName").val();
      var pizzaSize = parseInt($("select#pizzaSize").val());
      var pizza = new Pizza(pizzaName, pizzaSize);

      $("h2#pizzaName").append(pizza.name);

      for (var i = 0; i < toppingList.length; i++) {
        var topping = toppingList[i];

        if (pizza.size === 12) {
          var toppingFinalPrice = topping.price * .75;
        } else if (pizza.size ===18) {
          var toppingFinalPrice = topping.price * (1.25);
        } else {
          var toppingFinalPrice = topping.price;
        }

        $("#toppings").append("<option value='" + i + "'>" + topping.name + " $" + toppingFinalPrice + "</option>");
      }

      pizza.price();

      $("h2#pizzaCost").append(pizza.cost);
      $("#createPizza").fadeOut("slow");
      $("#pizzaDetail").delay(500).fadeIn("slow");

      $("span#addTopping").on("click", function() {
        var topping = toppingList[$("select#toppings").val()];
        pizza.toppings.push(topping);

        $("ul#currentToppings").empty();
        for (var i = 0; i< pizza.toppings.length; i++) {
          var currentTopping = pizza.toppings[i];

          $("ul#currentToppings").append("<li>" + currentTopping.name + "</li>")
        }
        $("#pizzaToppingDetail").fadeIn("slow");

        pizza.price();

        $("h2#pizzaCost").empty();
        $("h2#pizzaCost").append("Total: $" + pizza.cost);


      });

      $("span#savePizza").on("click", function() {
        order.addPizza(pizza);
        $("ul#pizzaList").empty();
        for (var i = 0; i < order.pizzas.length; i++) {
          var currentPizza = order.pizzas[i];
          $("ul#pizzaList").append("<li>"+ currentPizza.name + " $" + currentPizza.cost);
        }

        debugger;
        order.price();
        $("h2#orderCost").empty();
        $("h2#orderCost").append("Total: $" + order.cost);
      });
    });
  });

});
