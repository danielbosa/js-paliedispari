/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt('Type a word');
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


