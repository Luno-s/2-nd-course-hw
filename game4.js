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

