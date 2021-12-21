const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017"

mongoose.connect(`${DB_URL}/userDb`, (error)=>{
    if (error) {
        console.log('Erreur de connexion à mongodb');
        return
    }
    
    console.log('Connexion reussie');
})