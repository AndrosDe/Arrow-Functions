/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

/**
// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code Block
    return a + b;
}
    // calling the function above:
let sum = addTwoNumbers(3, 5);
    // "printing" it out:
console.log(sum);
 */

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code Block
    return a + b;    
}
    // calling the function above:
let sum = addTwoNumbers(3, 5);
    // "printing" it out:
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
//const addTwoNumbers2 = (a, b) => (a + b); - Also valid
    // calling the function above:
let sum2 = addTwoNumbers2(6, 5);
    // "printing" it out:
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!');

const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
      This is a muultipleline string!
    </p>`
)
console.log(returnMultipleLines());