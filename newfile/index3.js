//   function main(){
//   fetch("htttps://www.goog;e.com/ans")
// .then( async function(data){
//      const datas = await  data.json();
//      console.log(datas);
//     }) 
// }


// async function main() {
//    const res = await fetch("https://sum-server.100xdevs.com/todos")
//    const data = await res.json();
//    console.log(data.todos.length)
// }

// async function main() {
//    const res = await axios.get("https://sum-server.100xdevs.com/todos")
//    console.log(res.todos.length)
// }

// is by default call get method .. for post , delete and put and patch you should use this way
// async function main() {
//    const res = await fetch("https://sum-server.100xdevs.com/todos",{
//     method:"POST"
//    })
//    const data = await res.json();
//    console.log(data.todos.length)
// }

async function main() {
    await fetch("https://sum-server.100xdevs.com/todos",{
       method:"POST",
       body:{ 
        username:"hrithik",
        password:"admin123"
    }},
    {
        
        Headers:{
            Authorization:"berar 123"
        }
    })
}


// async function main() {
//     await axios.post("https://sum-server.100xdevs.com/todos",{
//         username:"hrithik",
//         password:"admin123"
//     },{
//         Headers:{
//             Authorization:"berar 123"
//         }
//     })
// }

async function main() {
    await axios({
        url:"https://sum-server.100xdevs.com/todos",
        method:"POST",
        headers:{
            Authorization:"Berar 225"
        },
        data:{
            "username":"hrithik"
        }
    })
    
}