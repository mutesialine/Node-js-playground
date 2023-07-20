const fs=require('fs')
//Reading file
fs.readFile('./docs/blog1.txt',(error, data)=>{
    if(error){
        console.log(error)
    }
       console.log(data.toString())
})

//writing files
fs.writeFile('./docs/blog2.txt', "hello again" ,()=>{
    console.log("files was written")
})

//creating directories
if(!fs.existsSync("./assets")){
    fs.mkdir("./assets",()=>{
        console.log("folder is created")
    })
}
//deleting files
if(fs.existsSync("./docs/deleteme.txt")){
    fs.unlink("./docs/deleteme.txt",(error)=>{
        if(error){
            console.log(error)
        }
        console.log("file deleted")
    })
  
}