var ashleysFirstPromise = new Promise(function(resolve, reject){
var ashleysMood = "good";

var goodVibesForAsh = ["Listen to music", "Chill out", "Watch AD", "Drink some Wine"];

var badVibes = ["diarhea", "tummy ache", "charlie poo poo on me"];

 if (ashleysMood === "good") {
   resolve(goodVibesForAsh);
 } else {
   reject(badVibes);
 }
})


ashleysFirstPromise.then(function (result) {
  if (result.lenth > 5){
    console.log("Ash has many good vibes!")
  } else {
    console.log("Bess be gettin on them good vibes!")
  }
})
.catch(function(result) {
console.log(result)
})
