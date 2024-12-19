// EX 1
const array1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    if (array1[i] === 10) {
        break;
    }
}

// EX 2
const array2 = [1, 5, 4, 10, 0, 3];
console.log(array2.indexOf(4));

// EX 3
const array3 = [1, 3, 5, 10, 20];
console.log(array3.join(' '));

// EX 4
const rows4 = 3;
const cols4 = 3;
const array4 = [];

for (let i = 0; i < rows4; i++) {
    const inArray4 = [];
    for (let n = 0; n < cols4; n++) {
        inArray4.push(1);
    }
    array4.push(inArray4);
}

console.log(array4);

// EX 5
const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);

// EX 6
const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
const filterArray6 = array6.filter(i => i !== 'a');
console.log(filterArray6);

// EX 7 
const array7 = [9, 8, 7, 6, 5];
const userNum = +prompt("Угадайте число:");

if (array7.includes(userNum)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// EX 8 
const array8 = 'abcdef';
const revArray8 = array8.split('').reverse().join('');
console.log(revArray8);

// EX 9 
const array9 = [[1, 2, 3], [4, 5, 6]];
const inArray9 = [];
for (let i = 0; i < array9.length; i++) {
    inArray9.push(...array9[i]);
}
console.log(inArray9);

// EX 10
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array10.length - 1; i++) {
    console.log(array10[i] + array10[i + 1]);
}

// Ex 11
function squareArray(numbers) {
    return numbers.map(num => num * num);
}

const array11 = [1, 2, 3, 4, 5];
const squaredArray11 = squareArray(array11);
console.log(squaredArray11);

// EX 12
function getWordLengths(words) {
    return words.map(word => word.length);
}

const inputArray11 = ['apple', 'banana', 'cherry', 'date'];
const wordLengths = getWordLengths(inputArray11);
console.log(wordLengths);

// Ex 13
function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

const inputArray12 = [1, -2, 3, -4, 5, -6];
const negativeNumbers = getNegativeNumbers(inputArray12);
console.log(negativeNumbers);

// EX 14
const array14 = [];
const evenArray14 = [];

function randomNumber14() {
    return Math.floor(Math.random() * 10);
}

for (let i = 0; i < 10; i++) {
    array14.push(randomNumber14());
}

for (let i = 0; i < array14.length; i++) {
    if (array14[i] % 2 === 0) {
        evenArray14.push(array14[i]);
    }
}

console.log("Исходный массив:", array14);
console.log("Массив с четными значениями:", evenArray14);

// EX 15
const array15 = [];

function randomNumber15() {
    return Math.floor(Math.random() * 6);
}

for (let i = 0; i < 10; i++) {
    array15.push(randomNumber15());
}

console.log("Исходный массив:", array15);
console.log("Среднее арифметическое этого массива:", array15.reduce((a, b) => a + b) / array15.length);