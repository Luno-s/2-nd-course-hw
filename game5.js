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