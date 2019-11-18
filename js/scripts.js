// Backend Logic

function Pizza(size, toppings, price) {
  this.toppings = toppings,
  this.size = size,
  this.price = 10
}

function Order(){
  this.order = [];
  this.finalOrder = 0;
}

Pizza.prototype.getFee = function () {
  var fee = 0;
  if (this.size === "small"){
    cost = size + 10;
    console.log(size);
  } else if (this.size === "medium"){
    cost = size + 15;

  } else if (this.size === "large"){
    cost = size + 20;
  } else {
    alert("pick a size");
  }
  return this.total = fee;

  // } else if (this.toppings.length > 2){
  //
  //   var price = size + price + toppings;
  // } else if (this.toppings.length < 2){
  //
  //   var price = size + price + toppings;
  // }

  console.log(fee);
};





// Frontend Logic
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    let newSize = parseInt($("#size"));
    let newTopp = parseInt($("#toppings"));

    let pizzaPrice = new Pizza(size, toppings, price);
    pizzaPrice.getFee();
console.log(Pizza);



// var newPizza = Pizza(size, toppings);

  })
})
