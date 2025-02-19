// GAME 1
function startGame1() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    alert("Угадайте число от 1 до 100");
    guessNumber();
}

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

// GAME 2
const operators = ['+', '-', '*', '/'];
        
function generateTask() {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    const operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator === '/') {
        if (num2 === 0) {
            return generateTask();
        }
        return { num1: num1 * num2, num2: num2, operator };
    }
    return { num1, num2, operator };
}

function calculateAnswer(task) {
    const { num1, num2, operator } = task;
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? (num1 / num2) : null;
        default:
            return null;
    }
}

function startGame2() {
    const task = generateTask();
    const userAnswer = prompt(`Решите задачу: ${task.num1} ${task.operator} ${task.num2} = ?`);

    if (userAnswer === null) {
        alert(`Игра окончена.`);
        return;
    }

    const correctAnswer = calculateAnswer(task);
    if (correctAnswer !== null && parseFloat(userAnswer) === correctAnswer) {
        alert(`Верно! Ответ: ${correctAnswer}.`)
    } else {
        alert(`Неверно! Правильный ответ: ${correctAnswer}.`)
    }
}

// GAME 3
function startGame3() {
    const wordUser = prompt("Введите текст:");
    const reversed = wordUser.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversed}.`);
}

// GAME 4
function startGame4() {
    const userChoice = prompt("Выберите: камень, ножницы или бумага");

    if (userChoice === null) {
        alert("Игра окончена.");
        return;
    }

    const options = ["камень", "ножницы", "бумага"];
    const userChoiceLower = userChoice.toLowerCase();

    if (!options.includes(userChoiceLower)) {
        alert("Неверный ввод! Пожалуйста, выберите камень, ножницы или бумагу.");
        return;
    }

    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result;
    if (userChoiceLower === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoiceLower === "камень" && computerChoice === "ножницы") ||
        (userChoiceLower === "ножницы" && computerChoice === "бумага") ||
        (userChoiceLower === "бумага" && computerChoice === "камень")
    ) {
        result = "Поздравляю, Вы победили!";
    } else {
        result = "Увы, победил компьютер!";
    }

    alert(`Ваш выбор: ${userChoiceLower}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}

// GAME 5
const quiz = [
    {
        question: "Какой цвет у неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startGame5() {
    let score = 0;

    for (const item of quiz) {
        const questionText = item.question + '\n' + item.options.join('\n');
        let userAnswer;

        while (true) {
            userAnswer = prompt(questionText + '\nВведите номер ответа без дополнительных символов.');

            if (userAnswer === null) {
                alert("Игра окончена.");
                return;
            }

            userAnswer = userAnswer.trim();

            if (/^\d+$/.test(userAnswer)) {
                const answerIndex = parseInt(userAnswer);

                if (answerIndex >= 0 && answerIndex <= item.options.length) {
                    if (answerIndex === item.correctAnswer) {
                        score++;
                    }
                    break;
                } else {
                    alert("Пожалуйста, введите номер ответа от 1 до " + item.options.length);
                }
            } else {
                alert("Пожалуйста, введите только номер ответа без дополнительных знаков.");
            }
        }
    }

    alert(`Вы правильно ответили на ${score} из ${quiz.length} вопросов.`);
}

// GAME 6
const colorButton = document.getElementById('colorButton');

function startGame6() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    mainContent.style.backgroundColor = randomColor;
}
colorButton.addEventListener('click', startGame6);