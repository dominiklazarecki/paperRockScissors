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
    if (game.playerHand !== '') {
        game.playerHand = '';
        this.style.boxShadow = '';
    } else {
        // console.log(this);
        game.playerHand = this.dataset.option;
        // console.log(this.dataset)
        console.log(game.playerHand);
        hands.forEach(hand => hand.style.boxShadow = '');
        this.style.boxShadow = '0 0 0 8px black';
    }
    
}

// const handSelection = (e) => {
//     //this - nie tworzy
//     console.log(e.target)
//     console.log(e.currentTarget)
// }

hands.forEach(hand => hand.addEventListener('click', handSelection))

function aiChoice() {
    const choice = hands[Math.floor(Math.random() * (2 - 0 + 1))].dataset.option;

    return choice;
} 


//funkcja sterująca
function startGame() {
    if (game.playerHand === '') {
        return alert('Wybierz papier, kamień lub nożyce');
    }

    game.aiHand = aiChoice();
}

document.querySelector('.start').addEventListener('click', startGame);


