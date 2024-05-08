const express = require('express');
http = require('http');
app = express()

const jwt = require('jsonwebtoken');

app.use(express.json());

const url = "https://ce807561-0c9d-4cbb-9222-af3ee8a8135b-00-2ndxw0bruui6z.sisko.replit.dev:4200/verify"

const jwtVerifyMiddleware = async (req, res, next) => {
  const response = await fetch(url,{
     headers: {
       Authorization: `${req.header('Authorization')}`
     }
   });
  const data = await response.json();
  if(response.ok){
    req.username = data.username;
    next();
  }
  else{
    res.status(response.status).send(data)
  }
}


app.get('/profile', jwtVerifyMiddleware, (req, res) => {
   res.status(200).send(`Hey There ${req.username}!`);
})


app.listen(3000, ()=>{
  console.log("web server started at port 3000")
})