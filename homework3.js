// 1
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for of найдите произведение элементов этого массива.
// Сделайте то же самое с помощью обычного цикла for
const nums = [2, 3, 4, 5];
let res = 1;
for (num of nums) {
    res *= num;
 }
 console.log(res);


res = 1;
for (num in nums) {
    res *= nums[num];
 }
 console.log(res);

 res = 1;
 for (let i = 0; i < nums.length; i++) {
     res *= nums[i];
  }
  console.log(res);


// 2
// Для каждого элемента объекта вывести строку типа: Riga is in Latvia
// Использовать цикл for in
const countries = {
    UK: 'London',
    USA: 'New-York',
    Estonia: 'Tallinn',
    Finland: 'Helsinki',
    Germany: 'Berlin',
    Italy: 'Rome'
}

for (country in countries) {
    console.log(`${countries[country]} is in ${country}`);
}

// 3
// Дано число 1000, делите его на 2 до тех пор, пока результат не будет меньше 5
// Количество итераций (раз сколько делили) выведите в консоль
let val = 1000;
let cnt = 0;
while (val > 5) {
    val /= 2;
    cnt++;
}
console.log(cnt);
console.log(val);

// 4
// Для диапозона чисел от 0 до 999 в пустой массив нужно добавить строки
// строка должна состоять из 4 символов одно из которых число диапозона
// если 5 то строка 0005, если 500 то строка 0500
// PS если понадобиться длина числа, метод length с числом не работает
// String(число) конвертирует число в строку
let emptyArr = [];
for (let i = 0; i < 1000; i++) {
   let numLen = String(i).length;
    if (numLen === 1) {
        emptyArr.push('000' + i);
    } else if (numLen === 2) {
        emptyArr.push('00' + i);
    } else if (numLen === 3) {
        emptyArr.push('0' + i);
    }
}
console.log(emptyArr);

// 5
// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];
for (num of numbers) {
    if (num % 2 === 0) {
        console.log(num, 'Even');
    }
    if (num === 23) {
        break
    }
}

// 6
// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];
let htmlString = '<ul>'
for (person of people) {
    htmlString +=`\n\t<li><h1>Hello ${person.name} ${person.surname}</h1></li>`
}
htmlString += '\n</ul>';
console.log(htmlString);

// 7
// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

const oddEven = function(start, end) {
    for (start; start <= end; start++) {
        if (start % 2 === 0) {
            console.log(start, 'Even');
        } else {
            console.log(start, 'Odd');
        }
    }
}
oddEven(10, 50);
// 8
// Напишите функцию которая принимает два числа в качестве аргумента
// Сравнивает их и выводит в консоль сообщение о том какое число больше
function whishIsGreater(num1, num2) {
    if (num1 > num2) {
        console.log(num1, 'is greater');
    } else if (num2 > num1) {
        console.log(num2, 'is greater');
    } else {
        console.log('Numbers are equal');
    }
}

whishIsGreater(5, 5) 
whishIsGreater(4, 5) 
whishIsGreater(5, 4) 
// 9
// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

const threeNumCompare = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1, 'is largest');
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2, 'is largest');
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3, 'is largest');
    } else {
        console.log('At least two nmbers are equal!');
    }
}
threeNumCompare(33, 30, 1)

// 10
// Напишите программу которая выведет в консоль ключи и значения данного объекта
// При условии что значение это строка (string)
const myProfile = {
    name: 'Jack',
    surname: 'Smith',
    emailVerified: false,
    age: 20,
    gender: 'Male',
    city: 'London',
    zip: 13233,
    hasChildren: false,
    married: true
}
console.log(Object.entries(myProfile));
for ([key, val] of Object.entries(myProfile)) {
    if (typeof val === 'string') {
        console.log(key, val);
    }
}

for (key in myProfile) {
    if (typeof myProfile[key] === 'string') {
        console.log(key, myProfile[key]);
    }
}