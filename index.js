const fs = require('fs');

//Blocking, synchronous way
const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);
const textOut = `This is what we know about the avocado: ${textIn}. \n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log("File written!");

//Non-Blocking, Asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
})
console.log("will read file!");