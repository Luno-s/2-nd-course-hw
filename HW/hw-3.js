// ex 1
let password = 'пароль';
let userPassword = prompt("Введите пароль")

if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// ex 2
let c = 5;

if (c >= 0 && c <= 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// ex 3
let d = 50;
let e = 110;

if (d >= 100 || e >= 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

// ex 4
let a = '2';
let b = '3';
alert (Number(a) + Number(b));

// ex 5
let monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:    
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:    
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:    
        alert("Лето");
        break;
    case 9:
    case 10:
    case 11:    
        alert("Осень");
        break;

    default:
        alert("Нет такого месяца");
        break;
}
