// Backend Logic
function Pizza(size, toppings) {
  this.toppings = toppings,
  this.size = size,
  this.price = 0
}

Pizza.prototype.pizzaPrice = function(price) {
  if (this.size === "small"){
    this.price += 10;
  } else if (this.size === "medium"){
    this.price += 15;
  } else if (this.size === "large"){
    this.price += 20;
  } else if (this.toppings.length > 2){
    this.price += 1;
  } else if (this.toppings.length < 2){
    this.price += 0;
  }
  return pizzaPrice;
  console.log();
}



// Frontend Logic
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();


// var newPizza = Pizza(size, toppings);

  })
})
