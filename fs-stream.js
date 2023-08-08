const fs = require("node:fs");
const zlib = require("node:zlib");

gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt',{
    encoding:'utf-8',
    highWaterMark: 2
});

const writableStream  = fs.createWriteStream('./file2.txt');

// readableStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writableStream.write(chunk);
// });


//Pipe
// readableStream.pipe(writableStream);

//chaining
// readble stream --> transform stream ->
readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))