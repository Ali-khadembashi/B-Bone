const fs  = require('fs');
const http  = require('http')


//SERVER
const server = http.createServer((req,res)=>{
    res.end('welcome to your first node server')
})

server.listen('8080','127.0.0.1')



// FILE SYSTEM
//Blocking (synchronous)
// const myText  = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(myText)
// fs.writeFileSync("./txt/output.txt", 'this is my text n then some is it gonna be a new file?')

//non-blocking(asynchronous)
// fs.readFile('./txt/starter.txt','utf-8', (err,data)=>{
//     if(err){
//         console.log(err);

//     }else if(!err){
//         console.log(data);
//     }
    
// })

// async promise-based
// const readFile = async()=>{
//     try {
//         const data  = await fs.promises.readFile('./txt/start.txt','utf-8')
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// readFile()