"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
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
(0, sharp_1.default)('./src/images/download.jpg').resize(300, 300).toFile("./src/images/done.jpg");
