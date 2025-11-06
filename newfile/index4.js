/*
Assignments on middleware:
Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
*/

import express from "express";
const app = express();

let numberOfreq = {};
setInterval(() => {
    numberOfreq = {}
}, 1000)

function totalReq(req, res, next) {
    const user = req.headers["user-id"]
    if (numberOfreq[user]) {
        numberOfreq += 1;
        if (numberOfreq > 5) {
            res.status(404).json({
                msg: "you are blocked"
            })
        } else {
            next()
        }
    }
    else{
        numberOfreq[user] = 1;
        next();
    }
    //one line numberOfreq[req.headers["user-id"]] +=1;
    
}





// //globally reqCount ko declare kiye 
// let reqCount = 0;

// function totalReq(req, res,next){
//     reqCount = reqCount + 1;        //here we increment its value
//     next();
// }

// app.use(totalReq)

// app.get("/r", function(req, res){
//     res.send({
//         totalRequests: reqCount     //idhar reqCount ke value ko return bhej diye 
//     });
// });

// app.get("/s", function(req,res){
//     res.send("Hello");
// });

app.listen(3000);



// import express from "express";

// const app = express();

// function isAgeEnoughMiddleware(req, res, next) {
//     const age =req.params.age;
//     console.log(typeof age)
//     console.log(age)
//     if (age > 14) {
//        next()
//     } else {
//         res.json({
//             msg: "you are not eligible for ridding."
//         })
//     }
// }
// app.use(isAgeEnoughMiddleware);

// app.get("/", function(req,res){
//     res.json({
//         msg:"you can ride the rollercoster"
//     })
// })
// app.listen(3000)


// function isAgeEnough(age){
// if(age>14){
//     return true;
// }else{
//     return false;
// }
// }

// app.get("/", function (req, res) {
//     if (isAgeEnough(req.query.age)) {
//         res.json({
//             msg: "you have right age for ridding the rolercoster"
//         })
//     } else {
//         res.status(411).json({
//              msg: "you are not eligible for ridding."
//         })
//     }

// })