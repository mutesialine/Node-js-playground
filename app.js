const express = require('express')
const morgan = require('morgan')
const mongoose= require('mongoose')
const Blog = require('./models/blogs');

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

app.get('/add-blog', (req, res)=>{
    const blog = new Blog({
        title:"new Blog",
        snippet:"about this new blog",
        body:" more about this blog"
    })
    blog.save()
    .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
})

app.get('/', (req, res)=>{
    res.redirect('blogs')
});

app.get('/blogs',(req, res)=>{
    Blog.find().sort({createdAt:-1})
    .then(result =>{ 
        res.render('index',{title:'All Blogs', blogs:result})
    })
    .catch(err =>{
        console.log(err)
    })
})

app.post('/blogs',(req,res)=>{
    const blog= new Blog(req.body)
    blog.save()
    .then( result =>{
        res.redirect('/blogs')
    })
    .catch(err =>{
        console.log(err)
    }) 
})

app.get('/blogs/:id',(req,res)=>{
    const id=req.params.id
     Blog.findById(id)
    .then( result =>{
    res.render('details',{title:'Blog Details', blog:result})
    })
    .catch(err =>{
        console.log(err)
    }) 
})

app.delete('/blogs/:id',(req,res)=>{
    const id=req.params.id
     Blog.findByIdAndDelete(id)
    .then(result =>{
    res.json({redirect:'/blogs'})
    })
    .catch(err =>{
        console.log(err)
    }) 
})

app.get('/about', (req, res)=>{
    res.render('about', {title :'About' })
})

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title :'Create the new blog' })
})

//404 page
app.use((req,res)=>{
    res.status(404).render('404', {title:'404'})
})
