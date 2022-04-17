"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageName = void 0;
var express_1 = __importDefault(require("express"));
var fs = __importStar(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send('hello');
});
var imageName;
exports.imageName = imageName;
var name;
var width;
var height;
app.get(['/images', 'images'], function (req, res) {
    // getting data from the request query
    exports.imageName = imageName = req.query;
    name = req.query.name;
    width = req.query.width;
    height = req.query.height;
    var displayPath = "C:\\Users\\Administrator\\Documents\\GitHub\\image-prossecing-api\\dist\\cash";
    var sourcePath = "src\\images";
    try {
        // checking if the image already exists
        if (fs.existsSync("dist\\cash\\".concat(name)) == true) {
            res.sendFile("dist\\cash\\".concat(name));
        }
        else if (fs.existsSync("".concat(sourcePath, "\\").concat(name)) == true) {
            // resizing the new image and saving it in the cash file
            (0, sharp_1.default)("".concat(sourcePath, "\\").concat(name))
                .resize(parseInt(width), parseInt(height))
                .jpeg()
                .toFile("".concat(displayPath, "\\").concat(name, "_").concat(width, "_").concat(height, ".jpg"));
            setTimeout(function () {
                res.sendFile("".concat(displayPath, "\\").concat(name, "_").concat(width, "_").concat(height, ".jpg"));
            }, 500);
        }
        else {
            // if the image is not found in the src folder
            res.send("this image : '" + name + "' is not found");
        }
    }
    catch (err) {
        res.send("the error is ".concat(err));
        // console.error(err)
    }
});
app.listen(port, function () {
    console.log("server is running on port".concat(port));
});
