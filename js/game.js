// 生成 1 到 100 之间的随机数字
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const gameResult = document.getElementById('gameResult');

guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        gameResult.textContent = '请输入 1 到 100 之间的有效数字。';
    } else if (userGuess < randomNumber) {
        gameResult.textContent = `猜的数字太小啦，你已经猜了 ${attempts} 次，再试试！`;
    } else if (userGuess > randomNumber) {
        gameResult.textContent = `猜的数字太大啦，你已经猜了 ${attempts} 次，再试试！`;
    } else {
        gameResult.textContent = `恭喜你，猜对啦！你一共用了 ${attempts} 次就猜对了。`;
        guessInput.disabled = true;
        guessBtn.disabled = true;
    }
});