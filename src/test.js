const sharp = require("sharp")
// (async () =>{
//     try{
//     sharp("./images/download.jpg")
//         .resize(200)
//         .toFile("./images/test.jpg")
//     }
//     catch(error){
//         console.log(error)
//     }
// }
sharp(".\\src\\images\\download.jpg").resize(100,100).toFile("done.jpg")