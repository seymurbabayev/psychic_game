const game = {
    wins: 0,
    losses: 0,
    guesses_left: 9,
    selected_letters: [],
    opponent_choice: "",

    displayValues: function(){
        const wins = document.querySelector('#wins')
        const losses = document.querySelector('#losses')
        const guesses_left = document.querySelector('#guesses_left')
        const guesses = document.querySelector('#guesses')

        wins.innerHTML = this.wins;
        losses.innerHTML = this.losses;
        guesses_left.innerHTML = this.guesses_left;
        guesses.innerHTML = this.selected_letters.join(' | ');
    },
    makeOpponentChoice: function () {
        const min = 97;
        const max = 122;
        const randomIndex = Math.round(Math.random() * (max - min) + min);
        this.opponent_choice = String.fromCharCode(randomIndex);
    },

    compareChoices: function (letter) {
        if(this.selected_letters.includes(letter)){
            alert('You have already used this option')
        } else {
            if (this.opponent_choice === letter) {
                this.wins++;
                this.restart()
            } else if (this.guesses_left > 1) {
                this.guesses_left--;
                this.selected_letters.push(letter);
            } else {
                this.losses++;
                this.restart();
            }
        }
        
    },

    restart: function () {
        this.guesses_left = 9;
        this.selected_letters = [];
        this.makeOpponentChoice();
    },
};

game.restart()
game.displayValues()

window.addEventListener('keypress', function(e) {
    const userChoice = e.key.toLowerCase()
    game.compareChoices(userChoice);
    game.displayValues()
})