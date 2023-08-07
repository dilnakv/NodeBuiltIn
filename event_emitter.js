const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping)=>{
    console.log(`Baking a ${size} sized pizza with ${topping} topping`)
})

emitter.on('order-pizza', (size)=>{
    if(size == 'large'){
        console.log('Serving complementory drink!')
    }
})

console.log('Ordering Pizza')
emitter.emit('order-pizza', 'large', 'mushroom');