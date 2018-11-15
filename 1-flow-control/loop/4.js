const exitSecond = 37
console.log('Waiting until seconds are at', exitSecond)
console.log('Seconds are at', new Date().getSeconds(), 'right now')

while (true) {
  let seconds = new Date().getSeconds()

  if (seconds === exitSecond) {
    console.log('Done! Time to quit!')
    process.exit(0)
  }
}
