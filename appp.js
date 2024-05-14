// const { log } = require("console")
// const http=require("http")
// const port = 3000

// const server=http.createServer(function(req,res){
//     res.write("hello")
//     res.end()
// })
// server.listen(port,function(error){
//     if (error){
//         console.log("wrong");
//     }
//     else{
//         console.log("suceesss");
//     }
// })

var fs = require("fs")

// fs.readFile("./sample.txt","utf-8",function(error,data){
//     if (error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })

// fs.writeFile("hello.txt",
// "iam sabik",
// (error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("File Created");
//     }
   
// }
// )

fs.rename("sample.txt","sabik.txt",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("file rename");
    }
})

// fs.unlink("hello.txt",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File Deleted");
//     }
// })