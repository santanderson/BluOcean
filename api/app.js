const mongoose = require('mongoose');
require('dotenv').config()
const { urlencoded } = require('express')
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
      extended: true,
    }),
  )

app.use(express.json())


//Routes import
const songsRouter = require('./routes/songsRouter')
const authRouter = require('./routes/auth.js')

app.use('/song', songsRouter)
app.use('/auth', authRouter)


//Database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@cluster0.fskiygx.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectou-se ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))