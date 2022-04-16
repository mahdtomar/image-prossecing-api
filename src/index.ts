import sharp from "sharp";
import {currentImage} from "./server/app";
console.log(currentImage[1])
// sharp('./src/images/download.jpg').resize(300,300).toFile("./src/images/done.jpg")