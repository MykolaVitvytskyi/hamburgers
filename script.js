Hamburger.SIZE_SMALL = {price: 50, calories: 20};
Hamburger.SIZE_BIG = {price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {price: 20, calories: 5};
Hamburger.STUFFING_POTATO = {price: 15, calories: 10};
Hamburger.TOPPING_SAUCE = {price: 15, calories: 0};
Hamburger.TOPPING_MAYO = {price: 20, calories: 5};


function Hamburger(size, stuffing){
  var topping = [];
  var calories = size.calories + stuffing.calories;
  var price = size.price + stuffing.price;
  
  this.addTopping = function(item){  
    topping.push(item);
  };

  this.calcPrice = function(){
    return topping.reduce(function(prev, next){    
      return prev + next.price;   
    },price);
  };

  this.calcCalories = function(){
    return topping.reduce(function(prev, next){    
      return prev + next.calories;   
    },calories);
  }
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calcCalories());
console.log("Price: " + hamburger.calcPrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Calories with sauce: " + hamburger.calcCalories());
console.log("Price with sauce: " + hamburger.calcPrice());
