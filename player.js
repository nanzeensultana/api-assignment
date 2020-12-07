const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('./player_schema');
const playerSchema =mongoose.model('details');



router.post('/action', (req, res) => {
    if(req.body.action=="insert"){
        playerSchema.insertMany([req.body.data])
        .then((player)=>{
            res.send(player)
        })
        
    }else if(req.body.action=="search"){
        playerSchema.find().sort(req.body.data).limit(req.body.limit)
        .then((player)=>{
            res.send(player)
        })

    }else if(req.body.action=="delete"){
        playerSchema.deleteOne(req.body.where)
            .then((player)=>{
                res.send(player)
            })
    }else if(req.body.action=="update"){
        
        playerSchema.updateOne(req.body.where,req.body.data)
            .then((player)=>{
                res.send(player)
            })
    }
    
    
})

module.exports = router