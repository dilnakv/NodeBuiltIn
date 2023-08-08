const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res)=>{
    // json response
    // const superHero ={
    //     firstName: 'Bruce',
    //     lastName: ';Wayne'
    // }
    // res.writeHead(200, {"Content-type": "application/json"});
    // res.end(JSON.stringify(superHero));
    const name ='Xminds';
    // res.writeHead(200, {"Content-type": "text/html"});
    // fs.createReadStream(__dirname +'/index.html').pipe(res)
    let html = fs.readFileSync('./index.html',"utf-8");
    html = html.replace('{{name}}', name);
    res.end(html);
});

server.listen(3000, ()=> {
    console.log('Server running on th port 3000');
});