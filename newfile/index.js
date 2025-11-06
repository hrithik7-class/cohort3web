import express from "express"
const app = express();

const PORT =2000

// const todos =[];
// // store in momory
// // store in file
// // store im todos.json file

// let user=[
//     1={
//         todo:[]

//     },
//     2={

//     }
// ]

// app.post("/create",function(req,res){
//     todos.push(
//         {   
//             id: Date.now(),
//             title:"hello you"
//         })
// });

// app.get("/todos",function(req,res){

// })

// app.put("/updated",fucntion(req,res){

// })

// app.delete("/",fcuntion(req,res){

// })

function SumEv(m){
    let ans = 0;
    for(let i =0 ; i<=m ; i++){
        
          ans += i;
    }
    return ans
}

app.get("/",function(req,res){
   const n =req.query.n
   const b = SumEv(n)
   res.send(b)
})

app.listen(PORT,function(){
 console.log("app is listening in port 2000")
})