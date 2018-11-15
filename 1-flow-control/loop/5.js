let numbers = [1, 2, 1337, 1911, 'A cat', 7777, 65536]

for(i = 0; i < numbers.length; i++) {
  console.log('loop', i)
  let number = numbers[i]

  // parseInt() talar om ifall en variabel är av typen heltal eller inte.
  if (parseInt(number)) {
    console.log(number, 'is indeed a number')
  } else {
    console.log('Oh!', number, 'is not a number!')
    console.log('Going to exit the loop here, fix your array!')
    break // Hoppar ur loopen!
  }
}
