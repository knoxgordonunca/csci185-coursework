// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let guessNum = 0;

function check() {
    guessNum += 1;
    //1. Get the number entered in the DOM
    let guess = document.querySelector('#guess').value;
    console.log(guess);
    //2. Store that in a variable
    guess = Number(guess);
    //3. Check if that is equal to the secret number
    //4. Display that they won
    if (guess === secret) {
        console.log('Win!');
        document.querySelector('#message').textContent = 'You Win!';
        document.querySelector('#num-guesses').innerHTML = guessNum + 'Guesses';
        document.querySelector('#celebrate').className = '';
    } else if (guess > secret) {
        console.log('Lose!');
        document.querySelector('#message').textContent = 'Too High!';
    } else if (guess < secret) {
        console.log('Lose!');
        document.querySelector('#message').textContent = 'Too Low!';
    };
}