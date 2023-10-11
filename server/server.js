const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userModel = require("./models/Users")

const app = express();
app.use(cors())
app.use(express.json())

let port = "3000"

mongoose.connect("mongodb+srv://testUser:testuser@cluster0.oedvj9u.mongodb.net/crud")
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})


//api's
app.get('/', (req,res)=>{
    userModel.find({}).then((users)=>{
        console.log("fetch",users)
        res.send(users);
    }).catch((e)=>{
        console.log("an error occured",e);
    })
})

app.get('/getuser/:id',(req,res)=>{
    const id = req.params.id
    userModel.findById({_id:id}).then((users)=>{
        console.log("fetch",users)
        res.send(users);
    }).catch((e)=>{
        console.log("an error occured",e);
    })
})
app.post('/createUser',(req,res)=>{
    userModel.create(req.body).then(users=>{
        // console.log(Users)
        console.log(req.body)
        res.json(users)
    }).catch((err)=>{
        console.log("An error occured",err)
    })
})

app.put('/updateuser/:id', (req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age}).then(users=>{
        // console.log(Users)
        console.log(req.body)
        res.json(users)
    }).catch((err)=>{
        console.log("An error occured",err)
    })
})


app.delete("/deleteUser/:id" ,(req,res)=>{
let id  = req.params.id;
userModel.findByIdAndDelete({_id:id}).then((res)=>{
    res.json()
}).catch((e)=>{
    console.log(e)
})

})