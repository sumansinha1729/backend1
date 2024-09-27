require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
  res.send("Hello World!")
})

app.get('/twitter',(req,res)=>{
    res.send("suman@1729")
})

app.get('/login',(req,res)=>{
    res.send("<h1>backend<h1/>")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>fullstack<h2/>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})