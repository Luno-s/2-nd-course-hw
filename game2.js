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