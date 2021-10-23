const path = require('path')
const ejs = require('ejs')
const axios = require('axios')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

//static folder
app.use(express.static(path.join(__dirname, 'public')))



//routes
app.get('', (req,res)=> {
    res.render('index')
})

app.get('/About_Us', (req,res)=> {
    res.render('about')
})

app.get('/CodeMate/:roomid', (req,res)=> {
    res.render('codemate', {
        id: req.params.roomid
    })
})

app.get('/answer', (req,res)=> {
    console.log('abc')
    if(!req.query.submit) {
        return alert('Invalid Submission')
    }
    else {
            let config = {
            method: 'post',
            url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : req.query.submit
            };
        
            axios(config)
            .then(function (response) {
                console.log(response.data)
                let output = response.data
                res.json({output})
            })
            .catch(function (error) {
                res.send(error)
            });
    }
})

app.get('*', (req,res)=> {
    res.render('404')
})



app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
})