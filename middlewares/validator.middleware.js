const validator = require('../helpers/validate.helper')


const input = (req, res, next) =>{

    const validatiionRules = {
        "firstName" : "string|min:3",
        "lastName" : "string|min:2",
        "email" : "email",
        "phone" : "string|phone",
        "password" : "string|min:6|strict",
        "cardNumber" : "string|cardNumber"
    }

    validator(req.body, validatiionRules, {}, (error, status)=>{
        if (!status) {
            return res.status(412).json({
                success : false,
                message : 'Validation failed',
                data : error
            })
        }
        next()
    })

}

module.exports = {
    input,
}
