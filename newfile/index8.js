import express from "express";
const app = express();

function middleCheck(req,res,next){
        console.log(req.pathname);
        console.log(req.method)
        console.log(new Date());
    next();
}
app.use(middleCheck)

app.get("/",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        msg:a+b
    })   
})
app.listen(4000)