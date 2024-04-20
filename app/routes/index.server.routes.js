const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.render('index',{title:'Home'})
})
router.get('/contact', (req,res,next)=>{
    res.render('contact',{title:'contact'})
})
router.get('/home', (req,res,next)=>{
    res.render('home',{title:'home'})
})
router.get('/projects', (req,res,next)=>{
    res.render('projects',{title:'projects'})
})
router.get('/services', (req,res,next)=>{
    res.render('services',{title:'services'})
})


router.get('/about', (req,res,next)=>{
    res.render('about',{title:'About'})
})

module.exports = router;