// const { error } = require("console")
// const http = require("http")
// const port = 3000

// const server = http.createServer(function(req,res){
// res.write("hello Node")
// res.end()
// })

// server.listen(port, function(error){
//     if (error){
//         console.log("something went wrong");
//     }else{
//         console.log("server listening on port " + port);
//     }
// })

// const http=require("http")
// const port=3000

// const server=http.createServer(function(req,res){
//     res.write("asdfs")
//     res.end()
// })

// server.listen(port,function(error){
//     if (error){
//         console.log("dfs");
//     }
//     else{
//         console.log("successsss");
//     }
// })


// function abc(){
//     console.log("outer");

//     function ghi(){
//         console.log("inner");
//     }
//     return ghi
// }
// abc()

arr=[1,2,3,4]

const [a,b,c,d]=arr
console.log(d);