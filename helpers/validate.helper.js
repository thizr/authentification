const Validator =require("validatorjs")

const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages)
    validation.passes(()=>callback(null, true))
    validation.fails(()=>callback(validation.errors, false))
}

Validator.register('strict', (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;
    return passwordRegex.test(password)
    },
    'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et une lettre')

Validator.register('phone', (phone)=>{
    const phoneRegex = /^7[05678]{1}\d{7}$/
    return phoneRegex.test(phone)
}, "Le numero de téléphone n'a pas le bon format. Ex : 771234567")

Validator.register('cardNumber', (cardNumber)=>{
    const cardNumberRegex = /^[12]{1}\d{3}\d{4}\d{5}$/
    return cardNumberRegex.test(cardNumber)
}, "Le numero de carte d'identité n'est pas correct")

module.exports = validator