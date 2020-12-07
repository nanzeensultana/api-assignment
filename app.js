const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./player_schema');
const playerSchema =mongoose.model('details');
mongoose.connect('mongodb://localhost/players', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())
const playerRouter = require('./player')

app.use('/', playerRouter)

app.listen(3000, () => console.log('server started'))
