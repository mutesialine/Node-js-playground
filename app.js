const express = require('express')
const app = express();

app.set('view engine','ejs')
app.listen(3000,'localHost',()=>{
    console.log('listening for local Host')
});

app.get('/', (req, res)=>{
    res.render('index')
});
app.get('/about', (req, res)=>{
    res.render('about')
})
//404 page
app.use((req,res)=>{
    res.status(404).render('404')
})
