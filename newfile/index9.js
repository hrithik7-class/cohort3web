import express from "express"
// import cors from "cors"
const app = express();
import fs from "fs"

let __dirname = fs.realpathSync(".")

app.use(express.json());


app.get("/",function(req,res){
     res.sendFile(__dirname + "/index.html"); 
})

app.post("/",function(req,res){
    const { a , b } = req.body;
    const c = Number(a + b)
    res.json({
        msg:c
    })
});

app.listen(4000);


// app.use(cors())


// cors({
//     origin:"http://127.0.0.1:5500",
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true
// })