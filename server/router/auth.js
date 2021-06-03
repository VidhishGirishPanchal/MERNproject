const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

require("../db/connection");
const User = require("../models/user")

// router.get("/", (req, res)=>{
//     res.send("express router!")
// })

router.post("/signup", (req, res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).json({"message": "Please fill all the datafields."})
    }else if (password != cpassword){
        res.json({message:"passwords do not match"})
    } 

    User.findOne({email: email})
    .then((existingUser)=>{
            if(existingUser){
                res.status(422).json({message: "User with this email ID already exists."})
            }
           else{
            const user = new User({name, email, phone, work, password, cpassword})
            //hashpassword before saving
            user.save()
            .then(()=>{
                res.status(201).json({message: "User registered Successfully!"})
            })
            .catch((err)=>{
                res.status(500).json({error: "Failed to register."})
                console.log(err);
                })
                
           }
        })
    .catch((err)=>{
        console.log(err);
    })
    
})

router.post("/signin", async (req, res)=>{
   try {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({error: "Please fill all the fields."})
    }
    const foundUser = await User.findOne({email:email})
    if(foundUser) {                        
            const isMatch = await bcrypt.compare(password, foundUser.password)

            const token = await foundUser.generateAuthToken();
            console.log("Generated token for " + foundUser.name + " : " + token);
            // console.log("before cookie");
            
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
            
            
            // console.log("after cookie");

            if (!isMatch) {
                res.status(400).json({error:"Invalid Credentials"})
                console.log("Invalid Password");
            } 
            else {
                res.json({message:"User signin Successful."})
                console.log("User signin Successful.");
            }
    }else{
            res.status(400).json({error:"Invalid Credentials"})
            console.log("Invalid Email");
    }
    
    
    
    
   } catch (err) {
       console.log(err);
   }
})

router.get('/contact', authenticate, function (req, res) {
    // console.log("Authorization for contact and home page")
    res.send(req.rootUser);
})

router.post("/contact", async (req, res)=>{
        try {
            const {name, email, phone, message} = req.body;
            if(!name || !email | !phone || !message){
                console.log("Please enter all the fields of contact form.");
                res.status(400).json({error:"Please enter all the fields of contact form."})
            }else{
                const userContact = await User.findOne({_id: req.userID});
                if(userContact){
                    const userMessage = await userContact.addMessage(name, email, phone, message)
                    await userMessage.save();
                    // window.alert("Message sent!")
                    res.status(201).json({message: "Message sent successfully"});
                }
            }

           

        } catch (err) {
            console.log(err);
        }
})

router.get('/', authenticate, function (req, res) {
    console.log("Authorization home page")
    res.send(req.rootUser);
})

router.get('/logout', (req, res)=> {
    console.log("Logout page");
    res.clearCookie("jwtoken", {path: "/"});
    res.status(200).send("User Logged out successfully.");
})


// router.post("/signin", (req, res)=>{
//     const {email, password} = req.body;
//     if(!email || !password){
//         res.status(400).json({message: "Please fill all fields."});
//     }
//     User.findOne({email: email})
//     .then((foundUser)=>{
//         if(!foundUser){
//             // console.log(foundUser);
//             console.log("Incorrect Email");
//             res.status(400).json({error: "Invalid Credentials"})
//         }else{
//               //function for generating auth token
//               function generateAuthToken(){
//                 try{
//                 let token = jwt.sign({_id: foundUser._id}, process.env.JWT_SECRET);
//                 foundUser.tokens = foundUser.tokens.concat({token:token});
//                 foundUser.save();
//                 return token;
//             }
//             catch(err){
//                 console.log(err);
//             }
//             }
//             const newtoken = generateAuthToken();
//             console.log("Generated token for " + foundUser.name + " : " + newtoken);
            
//             res.cookie("jwtoken", newtoken, {
//                 expires: new Date(Date.now() + 15552000),
//                 httpOnly: true
//             })
// //generating auth token end
//             bcrypt.compare(password, foundUser.password)
            
//             .then((isMatch)=>{
//                 if(isMatch){
//                     //function for generating auth token
//                             // function generateAuthToken(){
//                             //     try{
//                             //     let token = jwt.sign({_id: foundUser._id}, process.env.JWT_SECRET);
//                             //     foundUser.tokens = foundUser.tokens.concat({token:token});
//                             //     foundUser.save();
//                             //     return token;
//                             // }
//                             // catch(err){
//                             //     console.log(err);
//                             // }
//                             // }
//                             // const newtoken = generateAuthToken();
//                             // console.log("Generated token for " + foundUser.name + " : " + newtoken);
                            
//                             // res.cookie("jwtoken", newtoken, {
//                             //     expires: new Date(Date.now() + 15552000),
//                             //     httpOnly: true
//                             // })
//                             //generating auth token end
//                     res.json({message: "User Signin Successful."})
//                 }else{
//                     console.log("Incorrect Password");
//                     res.status(400).json({error: "Invalid Credentials"})
//                 }
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//         }
//     }
//     ).catch((err)=>{
//         console.log(err);
//     })
// })

module.exports = router;