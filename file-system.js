const fs = require("node:fs");

const fileContent = fs.readFileSync('./file.txt', 'utf-8')
console.log(fileContent);

fs.readFile('./file.txt','utf-8',(error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
});

fs.writeFileSync('./greetFile.txt','Hello world!');
fs.writeFile('./greetFile.txt', ' Hello Xminds ',{flag: 'a'}, (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log('File content updated');
    }
});