const http =require('http')
const fs=require('fs')
const server =http.createServer((req, res)=>{
    res.setHeader('content-type', 'text/html')
    let path='./views/'
    switch(req.url){
        case '/':
        path+='index.html'
        res.statusCode=200
        break;
        case '/about':
            path +='about.html'
            res.statusCode=200
            break;
            //redirect to about page
        case '/about-hello':
        res.statusCode=301
        res.setHeader('location','/about')
        res.end()
        break;
            default:
                path+='404.html'
                res.statusCode=404
    }
    fs.readFile(path, (err, data) =>{
    if(err){
        console.log(err, '========')
        res.end()
    }
    else{
        console.log(data)
        res.end(data)
    }
    })
    
})
server.listen(3000, 'localHost',()=>{
    console.log('listening for local Host')
}) 