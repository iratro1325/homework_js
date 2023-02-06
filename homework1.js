// Дан массив с налогами в виде дробного числа
// Используя forEach посчитайте зараплату после налогов
// Напоминаю что есть операторы +=, -=, *=, /=
// x = (x * 2) то же самое что и (x *= 2)
const taxes = {
    vat: 0.20,
    unemployement: 0.016,
    insurance: 0.008,
    pension: 0.002
}

let salary = 2000;
// console.log(Object.values(taxes));
// console.log(Object.keys(taxes));
// console.log(Object.entries(taxes));

let deductions = 0;
Object.values(taxes).forEach(tax =>{
    deductions += salary * tax
})
console.log(salary - deductions);

// Для каждого человека в заданом массиве выведете строку
// Hello 'name' 'surname'! You are 'age' years old.
const people = [['Jack', 'Smith', 25], ['Mary', 'Gold', 30], ['Sarah', 'Brown', 18], ['Bob', 'Summers', 20]]

people.forEach(person => {
    console.log('Hello ' + person[0] + ' ' + person[1] + '! You are ' + person[2] + ' years old.');
    console.log(`Hello ${person[0]} ${person[1]}! You are ${person[2]} years old.`);
})


// Задан список чисел и два пустых массива
// Зполните массив primeSquares квадратами чисел
// Так чтобы числа в массиве были в порядке возрастания
// А массив primeCubes кубами чисел
// Так чтобы числа в массиве были в порядке убывания
// У массива есть метод .sort()
const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19];
const primeSquares = [];
const primeCubes = [];

primes.forEach(num => {
    primeSquares.push(num ** 2);
    primeCubes.unshift(num ** 3);
    })
console.log(primeSquares);
console.log(primeCubes);

