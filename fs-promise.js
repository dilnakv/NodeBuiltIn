const fs = require("node:fs/promises");
// fs.readFile('./greetFile.txt','utf-8')
// .then((data) =>console.log(data))
// .catch((error) => console.log(error))

async function readFile(){
    try{
        const data = await fs.readFile('./greetFile.txt','utf-8');
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

readFile();