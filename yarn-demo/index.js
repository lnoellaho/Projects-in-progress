//  ./index.js

console.log("I have the super powers of a Node.js developer!")

let asciify = require('asciify')

const text = "Up Up And Away!"

// asciify is a function that accepts parameters, telling it what we want to do.
// The last parameter is a function, known as a 'callback'.  The callback is run
// once asciify has completed, or errored out.
asciify(text, {font: 'larry3d'}, function(err, result){
  if(err){
    console.log("Sorry, we couldn't generate that art")
  } else {
    console.log(result)
  }
})
