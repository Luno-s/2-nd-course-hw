// EX 1
console.log('js'.toUpperCase());

// EX 2
function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log(filter(['Apple', 'banana', 'apricot', 'cherry', 'Avocado'], 'ap'));

// EX 3
const number = 32.58884;

console.log(
    Math.floor(number),
    Math.ceil(number),
    Math.round(number),
);

// EX 4
console.log(
    Math.min(52, 53, 49, 77, 21, 32),
    Math.max(52, 53, 49, 77, 21, 32),
);

// EX 5 
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumber());

// EX 6
function generateRandomArray(num) {
    return Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}

console.log(generateRandomArray(8));

// EX 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(5, 10));

// EX 8
console.log(new Date());

// EX 9
const currentDate9 = new Date();
currentDate9.setDate(currentDate9.getDate() + 73)
console.log(currentDate9);

// Ex 10
function formatDate(date) {
    const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
