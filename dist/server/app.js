"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageProcessing_1 = __importDefault(require("./routers/imageProcessing"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send('hello');
});
app.use('/images', imageProcessing_1.default);
app.listen(port, function () {
    console.log("server is running on port".concat(port));
});
exports.default = app;
