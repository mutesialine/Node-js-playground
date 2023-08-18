const express = require('express')
const app = express();

app.set('view engine','ejs')
app.listen(3000,'localHost',()=>{
    console.log('listening for local Host')
});

app.get('/', (req, res)=>{
    const blogs = [
        {title: 'Aldo finds food', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'clever finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title:'home' , blogs})
});
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
