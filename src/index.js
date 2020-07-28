import foods from './foods'
import {choice, remove} from './helpers'

//Randomly drwa a fruit from the array
let fruits = choice(foods);
// Log the message `I'd like one random fruit please.`
console.log(`I'd like one ${fruits} please.`)
//Log the message: `Here you go: one RandomFruit`
console.log(`Here you go: one ${fruits}`)
//Log the message delicious may I have another?
console.log(`Delicious! may I have another?`);
//remove the fruit from the array of fruits
let remaining = remove( foods, fruits);
//Log the Message `I'm sorry, we're all out. We have the FRUITSLEFT left`
console.log(`I'm sorry, we're all out. we have the ${remaining.length} left.`);