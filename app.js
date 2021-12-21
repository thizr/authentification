const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes/auth.route')


const app = express()
const db = require('./databases/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))


app.use(
    cors({
        origin : "*",
        methods : ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders : 'content-type, Authorization, X-Requested-With, Origin, accept'
    })
)

app.use('/auth', routes)

app.use((req, res, next)=>{
    res.send("auth api running")
    next()
})

module.exports = app