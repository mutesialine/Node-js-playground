const Blog = require('../models/blogs');

const blogIndex = (req, res)=>{
    Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('blogs/index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    }); 
}

const blogDetails = (req, res)=>{
    const id=req.params.id
     Blog.findById(id)
    .then( result =>{
    res.render('blogs/details',{title:'Blog Details', blog:result})
    })
    .catch(err =>{
        console.log(err)
    }) 
}



const blogCreateGet = (req, res)=> {
        res.render('blogs/create', {title :'Create the new blog' })
}

const blogCreatPost = (req, res)=>{
    const blog= new Blog(req.body)
    blog.save()
    .then( result =>{
        res.redirect('/blogs')
    })
    .catch(err =>{
        console.log(err)
    }) 
}
const  blogDelete = (req, res)=>{
    const id = req.params.id
     Blog.findByIdAndDelete(id)
    .then(result =>{
    res.json({redirect:'/blogs'})
    })
    .catch(err =>{
        console.log(err)
    }) 
}

module.exports= {
    blogIndex, 
    blogDetails,
    blogCreateGet, 
    blogCreatPost, 
    blogDelete
}