const mongoose = require('mongoose')
const unique = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    firstName : {type : String, require: false, unique : false},
    lastName : {type : String, require: false, unique : false},
    email : {type : String, require: false, unique: true},
    password : {type : String, require: true},
    role: {type: String, require: false, unique: false}
})

userSchema.plugin(unique)
module.exports = mongoose.model('User', userSchema)