const express = require("express")
const app = express()
require('dotenv').config();
const port = 3000

const connectDB = require('./config/db');
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/git-auth', (req,res) => {
    res.send(process.env.GITHUB_CLIENT_ID)

})

app.listen(port, () => {
    console.log(`Your app is listening at http://localhost:${port}`)
  })