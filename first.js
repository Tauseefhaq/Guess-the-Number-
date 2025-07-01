function getrandomNumber() {
    return Math.floor(Math.random() * 100);
}
let randomNumber = getrandomNumber();
alert("Welcome to the Random Number Guessing game\nYou have 100 tries to make the guess and your score will be decided by subtracting the number of guess from 100");
let a = prompt("Enter a number between 1 and 100:");
a=Number.parseInt(a);
let score = 100
let guesses =[];
guesses.push(a);
if (a === randomNumber) {
    alert("Congratulations! You guessed the number: " + randomNumber);
}
while (a !== randomNumber) {
    if (a < randomNumber) {
        alert("Too low! Try again.");
    } else if (a > randomNumber) {
        alert("Too high! Try again.");
    }else if (guesses.length > 10) {
        alert("You have exceeded the maximum number of attempts. Game over!");
        break;
    }
    a = prompt("Enter a number between 1 and 100:");
    a = Number.parseInt(a);
    guesses.push(a);
}
if (guesses.length > 1) {
    alert(`your score is ${score - (guesses.length)} and you guessed the number in ${guesses.length} attempts`);
    console.log(guesses)
}else if (guesses.length === 1) {
    alert(`your score is perfect and you guessed the number in your first attempt`);
}