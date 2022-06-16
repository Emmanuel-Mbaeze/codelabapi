// const StudentModel = require("../model/model");

// // get all the data
// const getAll = async (req, res) => {
//     try{
//         const intel = await StudentModel.findAll();
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify(intel));
//     }catch(err){
//         console.log(err.message)
//     }
// }

// // const getOne =  async (req, res, id)=> {
// //     try{
// //         const set05 = await StudentModel.findOne(id)
// //         if(!set05 ) {
// //             res.writeHead(404, {"content-type": "application/json"})
// //             res.end(JSON.stringify({"message": "Bad request"}))
// //         } else {
// //             res.writeHead(200, {"content-type": "application/json"})
// //             res.end(JSON.stringify(set05))
// //         }
// //     }catch (err){
// //         console.log(err.message)
// //     }
// // }

// module.exports = {
//     getAll
//     // getOne
// }


const StudentModel = require ("../model/model")
const getAll =async (req,res)=>{
try{
const info = await  StudentModel.findAll()
res.writeHead(200,{"content-type":"application/json"})
res.end(jSON.stringify(info))
}catch(err){
console.log(err. message)
}
}
module.exports={
    getAll
}