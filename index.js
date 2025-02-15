const fs = require('fs')
const http = require('http')
const url = require('url')

// fs.readFile('./txt/st.txt', 'utf-8', (err, data1)=>{
//     if(err) return console.log('ERROR!🎇');

//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err, data2)=>{
//         console.log(data2)

//     fs.readFile('./txt/append.txt','utf-8', (err,data3)=>{
//         console.log(data3);
//         fs.writeFile('./txt/fienal.txt', `${data2}\n${data3}`, 'utf-8', err=>{
//             console.log('your file has been written😁')
//         })
//     })
// })
// })


/// server side
// const server = http.createServer((req,res) =>{
//     const pathName = req.url;

//     if(pathName === '/'  || pathName === '/overview'){
//      res.end("This is the overview")}
//      else if (pathName === '/product') {
//         res.end('This is the PRODUCT');
//      }
//      else if (pathName === '/api'){
//         fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data)=>{
//             const productData = JSON.parse(data)
//              console.log(productData)
//             })        
    
//        res.end("API")
//     }  
// else{
//     res.writeHead(404,{
//         'Content-type':'text/html',
//         'my-own-header':'hello-world'
//     });
//     res.end('<h1>Page not found! </h1>')

// }
//     console.log(req.url)
//     res.end('Hello from the server');
// });

server.listen(8000, '127.0.0.1', ()=> {
    console.log("Listening to request on the 8000")
})
// http.createServer((req,res)=>{
//     // res.writeHead(200, {'content-type': 'text/plain'})
//     res.write('hello form w3scholl');
//     res.end();
// }).listen(8000)
