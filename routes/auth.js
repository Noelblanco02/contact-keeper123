const express = require('express')
const router = express.Router()


//route get api/auth

//descrip get logged in user

// access private
router.get('/', (req,res)=>{res.send('get logged in user')})

//route post api/auth

//descrip auth user and get token

// access public
router.post('/', (req,res)=>{res.send('log in user')})


module.exports = router