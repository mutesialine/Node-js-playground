const http =require('http')
const fs=require('fs')
const server =http.createServer((req, res)=>{
    console.log(req.url , req.method)
    res.setHeader('content-type', 'text/html')
    fs.readFile('./views/index.html', (err, data) =>{
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