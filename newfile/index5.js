import express, { json } from "express";
const app = express();


app.get("/",function(req,res){
    let a;
    const file = a.length;
    json({
        msg:file
    })
})


// error middileware
app.use(function(err,req,res,next){
    res.status(404).json({});
})

app.listen(3000)