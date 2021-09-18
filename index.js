const express=require('express')
const app=express();
const mongoose=require('mongoose')
const url = 'mongodb://localhost/NoteBook'

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})
app.use(express.json())
const notebook = require('./notebook')
app.use('/notes',notebook)

app.listen(9000, () => {
    console.log('Server started')
})