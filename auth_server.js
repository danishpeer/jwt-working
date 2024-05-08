const express = require('express');
app = express()
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const users = [];

const jwtPass = "abc1234"

app.use(express.json())



app.get('/', (req, res) => {
   res.status(200).send("Hey There Auth user!");
})



app.post('/register', async (req, res) => {
   const data = req.body;
   const user = data.username;
   const pass = data.password;

   const hashedPassword = await bcrypt.hash(pass, 10);
   users.push({username: user, password: hashedPassword});
   console.log(users)

   res.status(201).json({ message: 'User registered successfully' });
})

app.get('/verify', async (req, res) => {
   const token = req.header('Authorization');
   if (!token) return res.status(401).send({ error: 'Access denied' });
   try {
       const decoded = jwt.verify(token, jwtPass);
      
      res.status(200).json({ username: decoded.username, message: 'Token verified successfully' });
    } 
   catch (error) {
      res.status(401).send({ error: 'Invalid token' });
   }
})

app.post('/login', async (req, res) => {
   const data = req.body;
   const user = data.username;
   const pass = data.password;

   //find the user in db
   const userExists = users.find(u => u.username === user);


   if(!userExists){
      return res.status(401).json({ error: 'Authentication failed' });
   }
   const passwordMatch = await bcrypt.compare(pass,       userExists.password);

   console.log("Match", passwordMatch);

   if(!passwordMatch){
      return res.status(401).json({ error: 'Authentication failed' });

   }

   const token = jwt.sign({username: user}, jwtPass);
   res.status(200).json({ token });
   
})

app.listen(4000, ()=>{
  console.log("Auth server started at port 4000")
})