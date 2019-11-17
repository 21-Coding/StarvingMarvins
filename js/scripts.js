// Backend Logic
function Pizza(size, toppings) {
  this.toppings = toppings,
  this.size = size,
  this.price = 0
}

Pizza.prototype.pizzaPrice = function(price) {
  if (this.size === "small"){
    return this.price += 10;
  } else if (this.size === "medium"){
    return this.price += 15;
  } else if (this.size === "large"){
    return this.price += 20;
  } else if (this.toppings.length > 2){
    return this.price += 1;
  } else if (this.toppings.length < 2){
    return this.price += 0;
  }
  return size, toppings;
}
console.log(this.size);



// Frontend Logic
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();

    let newSize = parseInt($("#size"));
    let newTopp = parseInt($("#toppings"));




// var newPizza = Pizza(size, toppings);

  })
})
