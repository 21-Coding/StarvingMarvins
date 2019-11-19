// Backend Logic
// var total = 0;
// let toppings = [];
function Pizza(size, toppings){

  this.size = size;
  this.toppings = toppings;
}




Pizza.prototype.getFee = function() {
  let cost = 0;
  if(this.size === "small") {
    cost += 10;
  } else if (this.size === "medium") {
    cost += 15;
  } else if (this.size === "large") {
    cost += 20;
  }
  for (let g=0; g <= this.toppings.length -1; g++) {
    if(this.toppings.length === 1) {
      cost +=2;
    } else if (this.toppings.length === 2) {
      cost += 4;
    } else {
      cost += 8;
    }
    return this.fee = cost;

  };
 };



// Frontend Logic
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    let size = $("input:radio[name=size]:checked").val();
    let newTopp = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      newTopp[newTopp.length] = $(this).val();
    });
    let newOrder = new Pizza(size, newTopp);
    newOrder.getFee();
    let checkout = newOrder.fee;
    console.log();
    $(".hide").fadeIn();
    $(".outcome").fadeIn();
    $("#form").slideUp();
    $("#toppingsSpan").text(newTopp);
    $("#priceSpan").text(checkout);
    $("#sizeSpan").text(newOrder.size);







    // pizzaPrice.getFee(this.price);



// var newPizza = Pizza(size, toppings);

});
});
