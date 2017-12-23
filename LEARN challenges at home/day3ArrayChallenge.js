/*Leeann and Ashley
//find maximum

var bigfive = [.9, 4.72, .49, 2.37, 234.8]
//Put var outside of function to be globally accessible
var max = 2

bigfive.forEach(function(a){
   if(a > max) {
       console.log(a)
       max = a
   }
})

//find minimum
var lowfive = [.9, 4.72, .49, 2.37, 234.8]
var min = 2

lowfive.forEach(function(a){
   if(a < min) {
       console.log(a)
       min = a
   }
})

//finds the smallest number (the closest to zero).
var smallNum = [0.02, -0.0052, -0.09, 0.233, -0.0001]
var small = 1
smallNum.forEach(function(i){
   console.log(i);
//https://stackoverflow.com/questions/4811536/find-the-number-in-an-array-that-is-closest-to-a-given-number
   if(Math.abs(i) < Math.abs(small)) {
       small = i;
   }
})
console.log(small)

//calculate the sum.

var toTal = [186,224,32]
var result = toTal.reduce(function(e,x){
   return e + x
})

//calculate the mean value.
var toTal = [186,224,32]
var result = toTal.reduce(function(e,x){
   return e + x
})
console.log(result / toTal.length)

//finds the index of the highest number
var bigFive = [.9, 4.72, 2010, .49, 2.37, 234.8, 3]
var max = 2;
var maxIndex = 0;

function a(){
   for(var i = 0; i < bigFive.length; i++){
   if (bigFive[i] > max) {
       maxIndex = i;
       max = bigFive[i];
       }
   } console.log(maxIndex)
}
a()
*/

var siblings = ["MaryAnn", "Cameron", "Emiley"]
siblings.sort()

var parents = ["Nu", "John", "Marilynne", "Bob"]
parents.sort()
parents.reverse()

var family = siblings.concat(parents);
family.sort()

family.reverse()

//Create a function that determines if a given name is amongst the names.
var givenName = prompt("What is your name?");

function nameMatch() {
   family.forEach(function(n) {
       if(n == givenName) {
           console.log("Yay! You're a match!");
       }
   })
}
nameMatch()
