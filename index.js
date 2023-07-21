const fs  = require('fs');
//Blocking
const myText  = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(myText)
fs.writeFileSync("./txt/output.txt", 'this is my text n then some is it gonna be a new file?')

//non-blocking
