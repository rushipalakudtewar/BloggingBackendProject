const express = require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const blogRoute = require('./routes/blogRoute')
const connectDatabase = require('./database/db')
connectDatabase()


app.use(express.json())

app.use('/api/v1',blogRoute)

const port=process.env.PORT || 8181
app.listen(port,()=>{
    console.log(`server running on the http://localhost:${port}`);
})


app.get("/",(req,res)=>{
    res.send(`<h1>Hello</h1>`)
})