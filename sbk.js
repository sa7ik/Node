const http=require("http")
const port =3000
const fs=require("fs")

const server=http.createServer(function(req,res){
    // res.writeHead(200,{'content-type':'text/html'})
   
    fs.readFile('index.html',function(error,data){
        if (error){
            res.writeHead(404)
            res.write("wrong")
        }
        else{
            res.write(data)
        }
        res.end
    })
})
server.listen(port,function(error){
    if (error){
        console.log("error");
    }
    else{
        console.log("success");
    }
})

// const fs=require("fs")

// fs.readFile("sabik.txt","utf-8",function(error,data){
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// })

fs.writeFile("sample.txt","hello iam sabik",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("file created");
    }
})
