import express,{ Response, Request} from "express";
const app = express();
const port = 3000;
app.get("/",(req:Request,res: Response )=>{
    res.send("hello")
})
let imageName: string;
let currentImage:string[];
app.get("/images/:name",(req,res)=>{
    let fileName = req.query.fileName
    let width = req.query.width
    let height = req.query.height
    res.send(`${fileName} ${width} ${height}`)
})

export  {imageName,currentImage};



app.listen(port,()=>{console.log(`server is running on port${port}`)})