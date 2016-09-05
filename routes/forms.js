'use strict';
var router = require('express').Router()
var AV = require('leanengine')


router.get('/',function(req, res, next){
	res.render('forms')
})

router.post('/',function(req, res, next){
	console.log(req.body)
	
	res.redirect('/forms')
	
})
module.exports = router