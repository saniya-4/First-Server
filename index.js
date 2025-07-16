const http=require("http")
const fs=require("fs")
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}: ${req.url} New Request Recieved \n`
    fs.appendFile("log.txt",log,(err,data)=>
    {
        switch(req.url)
        {
            case '/':res.end("Home Page");
            break;
            case '/about': res.end("saniya garg")
            break;
            default:
                res.end("Error 404");

        }
    })
})
myServer.listen(8000,()=>
{
    console.log("server started")
})