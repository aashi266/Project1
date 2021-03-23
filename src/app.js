const express = require("express");
require(".//db/conn");
const User1= require("./models/users");
const app= express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.post("/user",(req, res) => {
//     console.log(req.body);
//     const user = new User1(req.body);
//     user.save().then(() => {
//         res.send(user);
//     }).catch((e) => {
//         res.send(e)
//     })
    
// })
app.post("/user", async(req,res) => {
    try{
        const user = new User1(req.body);
        const createUser= await user.save();
        res.send(createUser);
    }catch(e){res.send(e);}
})

app.post("/user/login", async(req,res) => {
    try{
        const name1 = req.body.name;
        const passw= req.body.password;
        
        const validUser= await User1.findOne({name: name1, password: passw}, function(err, result){
            if(err){
                res.send("Login unsuccessful! User not found");
                console.log(err);
            }else{
                User1.updateOne({password: passw}, {active: true}, function (error, docs){
                    if(error){
                        res.send("Login unsuccessful");
                        console.log(error);
                    }else{
                        res.send("Login Successfull")
                    }
                })
            }
        })
    }catch(e){res.send(e);}
})

app.get("/user", async(req, res) =>{
    try{
        const userData= await User1.find();
        res.send(userData);
    }catch(e){
        res.send(e);
    }
})

app.listen(port, () => {
    console.log(`connection is set up at ${port}`);
})

