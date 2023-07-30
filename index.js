const fs  = require('fs');
const http  = require('http');
const { stringify } = require('querystring');
const url  = require('url')
const readFile = async (path, format)=>{
try {
  const data  =  await fs.promises.readFile(`${__dirname}/dev-data/data.json`,'utf-8')
  return JSON.parse(data)
} catch (error) {
  
}
}
//SERVER
const tempOverview  = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard  = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct  = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const server = http.createServer((req,res)=>{
    console.log(req.url);
    const pathname = req.url


    
    if(pathname==='/home'){
        res.end('welcome home!')
        // overview page
    }else if (pathname==='/'){
      res.writeHead(200,{'Content-type':'text/html'})
      res.end(tempOverview)
      
        //product page
    }else if (pathname==='/product'){

        // api
    }else if (pathname==='/api'){
      res.writeHead(200,{
        'Content-type':'application/json'
      })
      readFile().then(data=> res.end(JSON.stringify(data)))
     
      console.log(readFile());
    
    }else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'My-custom-header':'new type of header'
        })
        res.end('<h1>404 page not foud</h1>')
    }
    

})

server.listen('8080','127.0.0.1', ()=>{
    console.log('server is running');
})













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








class CustomType {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
  }
  
  function processInput(input) {
    if (Array.isArray(input)) {
      // Handle array input
      input.forEach(item => {
        if (item.name && item.code) {
          // Process each item in the array
          console.log(`Name: ${item.name}, Code: ${item.code}`);
        }
      });
    } else if (typeof input === 'object' && input.type) {
      // Handle object input
      const { name, number } = input.type;
      console.log(`Name: ${name}, Number: ${number}`);
    } else {
      // Invalid input
      console.log('Invalid input');
    }
  }
  
  // Example usage
  const arrayInput = [
    { name: 'String 1', code: 123 },
    { name: 'String 2', code: 456 },
    { name: 'String 3', code: 789 }
  ];
  
  const objectInput = {
    type: {
      name: 'Some String',
      number: 123
    }
  };
  
  processInput(arrayInput);
  processInput(objectInput);


























