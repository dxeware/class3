// Q1
var forward = [1, 21, 100, 1001];
var backward = forward.reverse();
console.log(backward);

// Q2
var arr1 = [20, 30, 40, 50, 60, 70];
var sum = arr1.reduce(function(a,b) {
  return a+b;
});
console.log(sum);

// Q4
function square(a) {
  return a*a;
}
var num1 = square(3);
console.log(num1);

var square = function (a) {
  return a*a;
}
console.log(square(5));

// Q6
function addition(num1, num2) { 
  //var result = num1 + num2;
  //return result;
  console.log(num1+num2);
}
 
function subtraction(num1, num2) { 
  //var result = num1 - num2;
  //return result;
  console.log(num1-num2);
}

function performOperation(callback) {
  callback(100, 50);
} 

console.log("====Q6=====");
performOperation(addition);
performOperation(subtraction);

//Q9
function coolFunction() {

    var kayak = "Eddyline";

    console.log("sailboat =" + sailboat);

    function evenCoolerFunction() {

        var canoe = "Wenonah";

        console.log("kayak =" + kayak);

    }

    evenCoolerFunction();

//    console.log(canoe);

    var sailboat = "Topper";

}

coolFunction();
