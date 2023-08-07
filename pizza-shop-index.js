const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, topping) =>{
    console.log(`Baking a ${size} sized pizza with ${topping} topping`);
    drinkMachine.serveDrink(size);
})
pizzaShop.order('large','mushroom');
pizzaShop.displayOrderNumber();
