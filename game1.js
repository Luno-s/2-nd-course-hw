const numberToGuess = Math.floor(Math.random() * 100) + 1;

alert("Угадайте число от 1 до 100");

function guessNumber() {
    const userGuess = prompt("Введите ваше предположение:");

    if (userGuess === null) {
        alert("Игра окончена.");
        return;
    }

    const parsedGuess = Number(userGuess);

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
        alert("Пожалуйста, введите число от 1 до 100.");
        guessNumber();
        return;
    }

    if (parsedGuess < numberToGuess) {
        alert("Ваше число слишком низкое, попробуйте снова.");
        guessNumber();
    } else if (parsedGuess > numberToGuess) {
        alert("Ваше число слишком высокое, попробуйте снова.");
        guessNumber();
    } else {
        alert(`Поздравляю! Вы угадали число ${numberToGuess}.`);
    }
}

guessNumber();