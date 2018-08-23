const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//  up-up-down-down-left-right-left-right-B-A

function init() {
  // Write your JavaScript code inside the init() function
  // tracker keeps track of where we are in the array
  let tracker = 0 // note: this needs to be 'let' since we're changing this value
  const body = document.querySelector('body')
  body.addEventListener('keydown', (event) => {
    if (event.which === code[tracker]) {
      console.log('Success!')
      tracker++
      if(tracker === code.length) {
        alert('You found it!')
        let paragraph = document.createElement('p')
        body.append("yay great job!", paragraph)
      }
    } else {
      console.log('you messed up :(')
      tracker = 0
    }
  }
  )
}
init()