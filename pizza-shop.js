const EventEmitter = require("node:events")

const emitter = new EventEmitter();

class PizzaShop extends EventEmitter {
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, topping){
        this.orderNumber++;
        this.emit('order',size,topping);
    }

    displayOrderNumber(){
        console.log(`Current order number is ${this.orderNumber}`)
    }
}

module.exports = PizzaShop;