"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentImage = exports.imageName = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("hello");
});
let imageName;
exports.imageName = imageName;
let currentImage;
exports.currentImage = currentImage;
app.get("/images", (req, res) => {
    let fileName = req.query.fileName;
    let width = req.query.width;
    let height = req.query.height;
    res.send(`${fileName} ${width} ${height}`);
});
app.listen(port, () => { console.log(`server is running on port${port}`); });
