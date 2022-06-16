// const http = require('http');
// const PORT = 5000;
// // const footballController = require('./controller/footballerController')
// const {getAll} = require('./controller/Controller')

// const server = http.createServer((req, res)=>{
//     if(req.url === "/api/student" && req.method === "GET"){
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         getAll(req, res)
//     // }else if (req.url.match(/\/api\/student\/([0-9)])/)  && req.method === "GET") {
//     //     res.writeHead(200, {"content-type": "application/json"})
//     //     const id = req.url.split("/")[3]
//     //     getOne(req, res, id)
//     }else{
//         console.log("error in loading this page")
//     }
// });

// server.listen(PORT, ()=>{
//     console.log(`Server is listening to port: ${PORT}`);
// });

const http=require("http")
const PORT = 4321
const {getAll}=require ("./controller/controller")
const server = http.createServer((req,res)=>{
 if (req.url==="/api/codelab" && req.method ==="GET"){
     res.writeHead(200,{"Content-Type":"appication/json"})
     getAll(req,res)
 }else{
     console.log("site cant be reached")
 }
})
server.listen(PORT,()=>{
    console.log(`aboki: ${PORT}`)
})