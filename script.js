/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt('Type a word').toLowerCase();
//isPalindrome(userWord);
console.log(isPalindrome(userWord));

function isPalindrome(word){
    for (i = 0; i < (word.length / 2); i++){
        if ((word[i]) !== (word[word.length - i - 1])){
        return false;
        }
    return true;
}
}

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userChoice = prompt('Even or Odd?').toLowerCase();
let userNumber = parseInt(prompt('type a number between 1 and 5'));
let agentNumber = RndNumberGen(1,5);

whoWin();

function whoWin(){
    if (userChoice != 'odd' && userChoice != 'even'){
        return 'Learn the rules and try again';
    };
    if (userNumber > 5){
        console.log('Not valid: choose a number between 1 and 5');
        return 'Not valid: choose a number between 1 and 5'
    } else if (userNumber < 1){
        console.log('Not valid: choose a number between 1 and 5');
        return 'Not valid: choose a number between 1 and 5'
    } else {
        if (parityCheck(userNumber, agentNumber) == userChoice){
            console.log('Result: ' + parityCheck (userNumber, agentNumber));
            console.log('Your choice: ' + userChoice);
            console.log('You won');
            console.log('Your number: ' + userNumber);
            console.log('Agent number: ' + agentNumber);
        } else if (parityCheck (userNumber, agentNumber) != userChoice){
            console.log(parityCheck (userNumber, agentNumber));
            console.log('Your choice: ' + userChoice);
            console.log('You lost');
            console.log('Your number: ' + userNumber);
            console.log('Agent number: ' + agentNumber);
        }
    };
}
console.log(whoWin());



function parityCheck (num1, num2){
    let result = num1 + num2;
    if(result % 2 === 0){
        return 'even'
    } else {
        return 'odd'
    }
};



