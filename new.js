// const http=require('http')
// const port=3000

// const server=http.createServer(function(req,res){
//     res.write("hello")
//     res.end()
// })

// server.listen(port,function(error,data){
//     if (error){
//         console.log("wrong");
//     }
//     else{
//         console.log("sucess");
//     }
// })

const fs=require("fs")

fs.readFile("sample.txt","utf-8",function(error,data){
    if (error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

fs.writeFile("ghi.txt","hello,iam sabik",(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("file created");
    }
})