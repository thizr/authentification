const userSchema = require('../models/auth.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.sign_up = (req, res)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash=>{
        const user = new userSchema({
            ...req.body,
            password : hash
        })

        user.save()
        .then(response=>{
            res.status(201).json({
                message : "User succesfully created!",
                result : response
            })
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({error: error})
        })
    }).catch((error)=>{
        console.log(error);
    })
}


exports.login = (req, res)=>{
    let secret = "secrete-token-authentification-service-random-65278908"
    let getUser = {};
    userSchema.findOne({email: req.body.email})
    .then(user=>{
        if (!user) {
            return res.status(401).json({message : "Authentification failed: User not found"})
        }
        getUser = user
        return bcrypt.compare(req.body.password, user.password)
    })
    .then(response=>{
        if (!response) {
            return res.status(401).json({message : "Authnetification failed : Password incorrect"})
        }

        let token = jwt.sign(
            {...getUser, password : null},
            secret,
            {expiresIn : "1h"}
        )
        
        res.status(200).json({
            token: token,
            expiresIn: 3600,
            _id : getUser._id
        });
    })
    .catch((error)=>{
        return res.status(500).json({message : "Authentification failed"})
    })
}