function play() {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const choices = ['rock', 'paper', 'scissors'];

    rock.addEventListener('click', () => {
        playGame('rock');
    });
    paper.addEventListener('click', () => {
        playGame('paper');
    });
    scissors.addEventListener('click', () => {
        playGame('scissors');
    });

    function playGame(you) {
        const img = document.querySelector('#you');
        img.src = `images/${you}.png`;

        const bot = choices[Math.floor(Math.random() * 3)];
        const img1 = document.querySelector('#bot');
        img1.src = `images/${bot}.png`;

        let result;
        if (you == bot) {
            result = 'draw';
        } else if ((you == 'rock' && bot == 'scissors') || 
                   (you == 'paper' && bot == 'rock') || 
                   (you == 'scissors' && bot == 'paper')) {
            result = 'win';
        } else {
            result = 'lose';
        }

        const resultText = document.querySelector('.result');
        if (result == 'win') {
            resultText.textContent = 'You win!';
        } else if (result == 'lose') {
            resultText.textContent = 'You lose!';
        } else {
            resultText.textContent = 'Draw!';
        }
    }
}

play();
