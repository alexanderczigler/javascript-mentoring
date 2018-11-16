let breed = 'Russian Blue'

function saySomething() {
  console.log('meow')
}

// Kan du se felet?
function setBreed(breed) {
  breed = breed
}

saySomething()
setBreed('Siberian')

console.log(breed)




// function getCatBreed() {
//   return 'Scottish Fold'
// }

// breed = getCatBreed()
// console.log(breed)



// function getCatBreed(foldedEars) {
//   if (foldedEars) {
//     return 'Scottish Fold'
//   } else {
//     return 'Norwegian Forest Cat'
//   }
// }

// breed = getCatBreed(true)
// console.log(breed)

