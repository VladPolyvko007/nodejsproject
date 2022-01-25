import Fibonacci from "./Fibonacci.mjs";
import {createInterface} from 'readline';

const fib = new Fibonacci(1, 1, 0)
let fibmas = []
fibmas[0] = 1
let num3
let fibmas1 = []

let rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Please input amount of Fibonacci numbers:'
});
rl.prompt();
rl.on('line', (input) => {
    creatFibonacciNumbers(input,fibmas)
    elevationToSquare(fibmas,fibmas1)
    sumOfElevatedFibnumber(fibmas1)
    rl.close();
});


function creatFibonacciNumbers(input,fibmas) {
    fibmas.forEach(() => {
        for (let i = 1; i < input; i++) {
            num3 = fib.num2 + fib.num1
            fib.num1 = fib.num2
            fibmas.push(fib.num1)
            fib.num2 = num3
        }
        console.log('Fibonacci numbers:[' + fibmas + ']')
    });
}

function elevationToSquare(fibmas,fibmas1) {
    fibmas.forEach((arrElement) => {
        fibmas1.push(Math.pow(arrElement, 2))
    })
    console.log('Elevated to the square fibonacci numbers:[' + fibmas1 + ']')
}

function sumOfElevatedFibnumber(fibmas1) {
    fibmas1.forEach((arrElement) => {
        fib.sum += arrElement
    })
    console.log('Sum of elevated fibonacci numbers = ' + fib.sum)
}



