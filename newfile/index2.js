import express from "express"

const app= express();
app.use(express.json())
const PORT =3000;

const users=[
    {
        name:"john",
        kidney:[
            {
                healthyKidney:false
            }
        ]
    }
]

app.get("/",function(req,res){
    const  johnkidney = users[0].kidney;
    const totalLengthKyd =  johnkidney.length;
    let healthyKid=0
    for(let i=0 ; i< totalLengthKyd ; i++){

        if(johnkidney[i].healthyKidney){
            healthyKid = healthyKid +  1;
        }   
    }
     let unhealthykyd = totalLengthKyd - healthyKid;
    res.json({unhealthykyd,
        healthyKid,
        totalLengthKyd}
    );   
});

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy; 
    users[0].kidney.push(
        {
            healthyKidney:isHealthy
        }
    )
    res.json({msg:"done"})
})

app.put("/",function(req,res){
    for(let i=0 ; i < users[0].kidney.length; i++){
        users[0].kidney[i].healthyKidney = true;
    }
    res.json({})
})

app.delete("/", function(req,res){
    const newKidneys = []
    for(let i=0 ; i < users[0].kidney.length; i++){
        if(users[0].kidney[i].healthyKidney){
            newKidneys.push({
                healthyKidney:true
            })
        }
    }
    users[0].kidney = newKidneys
    res.json({msg:"done"})
})
app.listen(PORT)
