// const StudentData = require('../data/dummy.json')

// const findAll = (req, res)=>{
//     return new Promise((resolve, reject)=>{
//         resolve(StudentData);
//     });
    
// }

// // const findOne = (id) =>{
// //     return new Promise((resolve, reject) => {
// //         const set05 = StudentData.find((t) => t.id === id    
// //         )
// //         resolve(set05)
// //     })
// // }

// module.exports = {
//     findAll
//     // findOne
// }

const StudentData = require ("../data/dummy.json")
const findAll =( req, res)=>{
return new Promise((resolve,reject)=>{
    resolve(StudentData)
})
}

module.exports = {
    findAll
}