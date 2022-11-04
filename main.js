const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

const hands = [...document.querySelectorAll('.select img')];

//Pierwsza funkcja

function handSelection() {

    ///////////////GÓWNO KOD DO ANALIZY
    // if (game.playerHand !== '') {
    //     game.playerHand = '';
    //     hands.forEach(hand => hand.style.boxShadow = '')
    // } else {
    //     // console.log(this);
    //     game.playerHand = this.dataset.option;
    //     // console.log(this.dataset)
    //     // console.log(game.playerHand);
    //     hands.forEach(hand => hand.style.boxShadow = '');
    //     this.style.boxShadow = '0 0 0 8px black';
    // }

    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 10px black';

}

// const handSelection = (e) => {
//     //this - nie tworzy
//     console.log(e.target)
//     console.log(e.currentTarget)
// }

hands.forEach(hand => hand.addEventListener('click', handSelection))

function aiChoice() {
    const choice = hands[Math.floor(Math.random() * 3)].dataset.option;

    return choice;
}

function checkResult(player, ai) {
    if (player === ai) {
        ++gameSummary.draws;
        return "draw";
    } else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyce') || (player === "nożyce" && ai === 'papier')) {
        ++gameSummary.wins;
        return 'win';
    } else {
        ++gameSummary.losses;
        return 'lose';
    }
}

//Publikacja Wyniku

function publishResult(winner, gameCounter) {
    document.querySelector('.leftPanel_userChoice span').textContent = game.playerHand;

    document.querySelector('.leftPanel_computerChoice span').textContent = game.aiHand;

    document.querySelector('.leftPanel_whoWin span').textContent = winner;

    document.querySelector('.rightPanel_gameCounter span').textContent = gameCounter;

    document.querySelector('.rightPanel_drawCounter span').textContent = gameSummary.draws;

    document.querySelector('.rightPanel_winCounter span').textContent = gameSummary.wins;

    document.querySelector('.rightPanel_loseCounter span').textContent = gameSummary.losses;


}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"`).style.boxShadow = "";
    game.playerHand = "";
}

//funkcja sterująca
function startGame() {
    if (game.playerHand === '') {
        return alert('Wybierz papier, kamień lub nożyce');
    }

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    let gameCounter = ++gameSummary.numbers;
    publishResult(gameResult, gameCounter);

    endGame();

}

document.querySelector('.start').addEventListener('click', startGame);


