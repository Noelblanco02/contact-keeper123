const express = require('express')
const router = express.Router()


//route post api/users

//desc register a user

// access public
router.post('/', (req,res)=>{res.send('registers a user')})

module.exports = router