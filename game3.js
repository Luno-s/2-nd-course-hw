function startGame3() {
    const wordUser = prompt("Введите текст:");
    const reversed = wordUser.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversed}.`);
}