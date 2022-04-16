import sharp from "sharp";
import fs from "fs";
console.log("hello world");
// let info;
// (async ()=>{
//     try{
//          info = await sharp("./images/download.jpg").metadata();
//         console.log(info)
//     }   catch(error){
//         console.log(error)
//     } 
// })
// console.log(info)
// // sharp("./images/download.jpg").png().toFile("dist/images.png")
sharp('./src/images/download.jpg').resize(300,300).toFile("./src/images/done.jpg")