const http = require("http");
let fs=require('fs');
const path=require('path')
let YourName='baji'


fs.writeFile(path.join(__dirname,"index.html"),
`<h1>Hello World</h1>
<p>This is ${YourName}..</p>`,
(err)=>{
    console.log(err);
}
)
const server= http.createServer((request,response)=>{
    response.writeHead(200, { "Content-type": "text/html" });
    fs.readFile(path.join(__dirname,"index.html"),'utf-8',(err,data)=>{
            response.end(data)
    })
})
server.listen(5000,()=>{console.log("The server is up at port 5000")});