var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var main = require('./main/main_oracle')
var email = require('./email/email_oracle')


// 첫 페이지
router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "../public/main.html"))
})

// app.use('/main', main)
// app.use('/email', email)
router.use('/main', main)
router.use('/User', email)

module.exports = router;