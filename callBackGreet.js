function greet(name){
    console.log(`Hey ${name}`);
}

function higherOrderFunction(callback){
    const name ='Diya';
    callback(name);
}

higherOrderFunction(greet);