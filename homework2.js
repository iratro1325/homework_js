// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива
const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

users.forEach (user => {
    if (user.length <= 5) {
        shortNames.push(user);
    }
})

shortNames.forEach (user => {
    let index = users.indexOf(user);
    users.splice(index, 1);
})
console.log(shortNames);
console.log(users);


// Напишите функцию, которая для каждого имени в массиве
// выведет в консоль строку 
// Hello ИМЯ. Your name is ДЛИНА characters long!
const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
function checkNameLength(namesArr) {
    namesArr.forEach(name => {
        console.log(`Hello ${name}. Your name is ${name.length} characters long!`);
    })
}
checkNameLength(names);

// напишите функцию которая примет объект в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: false,
    mileage: 10000
}

const checkCar = function (car) {
    let result = `Your ${car.make} ${car.model} `;
    if (car.popular) {
        result += 'is popular. ';
    } else {
        result += 'is not popular. ';
    }
    if (car.mileage >= 100000) {
        result += 'It is not covered by warrenty anymore.'
    } else {
        result += "It is still covered by warrenty"
    }
    return result;
}

console.log(checkCar(myCar));


// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их

const sumPositiveNumber = (num1, num2) => {
    if (num1 < 0) {
        num1 = 0 - num1;
    }
    if (num2 < 0) {
        num2 *= -1;
    }
    return num1 + num2;
}

console.log(sumPositiveNumber(-5, 5));
console.log(sumPositiveNumber(-5, -5));
console.log(sumPositiveNumber(5, 5));

// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)

const sumPositiveNumberOnly = function (num1, num2) {
    if (num1 < 0 || num2 < 0) {
        console.log('One of the numbers is negative!');
    } else {
        console.log(num1 + num2);
    }
}
sumPositiveNumberOnly(3, -5);
sumPositiveNumberOnly(-3, 5);
sumPositiveNumberOnly(3, 5);