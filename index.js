const http=require("http")
const fs=require("fs")
const url=require("url");
const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico")
    {
        return res.end();
    }
    const log=`${Date.now()}: ${req.url} New Request Recieved \n`
    const myURL=url.parse(req.url,true);
    console.log(myURL);
    fs.appendFile("log.txt",log,(err,data)=>
    {
        switch(myURL.pathname)
        {
            case '/':res.end("Home Page");
            break;
            case '/about':
            {const username=myURL.query.name;
            res.end(`Hi ${username}`);}
            break;
            case '/search':
              {  const search=myURL.query.search;
                res.end(`Your  results are ${search}`)
                break;}
            default:
                res.end("Error 404");

        }
    })
})
myServer.listen(8000,()=>
{
    console.log("server started")
})