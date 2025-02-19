// EX 1
const min = (a, b) => (a < b) ? a : b;

console.log(min(8, 4));
console.log(min(6, 6));

// EX 2
const isEven = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';

console.log(isEven(8));
console.log(isEven(3));

// EX 3
const square = (num) =>  num ** 2;

console.log(square(8));

// EX 4
function age() {
    let age = prompt('Введите свой возраст:')

    if (age <= 0) {
        alert('Вы ввели неправильное значение');
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

age();

// EX 5
function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(calc(8, 4));

// EX 6
function askNumber() {
    let number = prompt('Введите число')

    if (isNaN(number)) {
        alert('Переданный параметр не является числом');
    } else {
        alert(`${number} в кубе равняется ${number ** 3}`);
    }
}

askNumber();

// EX 7
function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return Math.PI * this.radius * 2;
}

const circle1 = {
    radius: 8,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 6,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

console.log(circle1.methodGetArea());
console.log(circle1.methodGetPerimeter());
console.log(circle2.methodGetArea());
console.log(circle2.methodGetPerimeter());