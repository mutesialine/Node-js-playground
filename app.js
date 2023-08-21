const express = require('express')
const morgan = require('morgan')
const mongoose= require('mongoose')
const blogRoutes= require('./routes/blogRoutes')


const app = express();

const dbURI='mongodb+srv://aline:123456789A@cluster0.fcm6now.mongodb.net/?retryWrites=true&w=majority'
 mongoose.connect(dbURI)
 .then((result)=>console.log('connected to the db'))
 .catch((err)=> console.log(err))

app.set('view engine','ejs')

app.listen(3000,'localHost');

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use(morgan('dev'))

app.get('/', (req, res)=>{
    res.redirect('/blogs')
});

app.get('/about', (req, res)=>{
    res.render('about', {title :'About' })
})

app.use('/blogs',blogRoutes)

//404 page
app.use((req,res)=>{
    res.status(404).render('404', {title:'404'})
})
