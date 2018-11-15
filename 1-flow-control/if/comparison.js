// Equals och deep equals
// Eftersom javascript är "löst typat" bör man tänka på vilken typ av värde en variabel kan anta, inte bara värdet i sig

let one = 1

if (one == 1) {
  // twå likamedtecken jämför värdet i sig, men inte typen av värde
  console.log('one equals 1')
}

if (one === 1) {
  // tre likamedtecken jämför värdet och typen - båda måste matcha
  // variabeln one är lika med 1 och är av typen siffra (heltal)
  console.log('one deep equals 1')
}

// integer och string

let two = '2'

if (two == 2) {
  console.log('two equals 2')
}

if (two === 2) {
  console.log('two deep equals 2')
} //else {
//   console.log('two does not deep equal *the integer* 2')
// }

if (two === '2') {
  console.log('two deep equals *the string* \'2\'')
}
