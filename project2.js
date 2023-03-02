// Array with numbers from 1 to 99 to contain the bingo numbers
// Function to shuffle the values in an array indicated in the argument array
let numbers = [];
function shuffle(array) {
    for (let i = 1; i <= 99; i++) {
        numbers.push(i);
    }
    let i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
shuffle(numbers);

//Pick a random element from the array and add it to a new array
// so we have the previous numbers in the array 'numbers'
// the new array with the bingo numbers in 'bingoNumbers'
// and with 'n' we display the actual number that we are picking
let bingoNumbers = [];
let n = 0;
let takeNum = document.querySelector('.btn-take-num');
takeNum.addEventListener('click', () => {
    n = numbers.pop(0);
    bingoNumbers.push(n);
    document.querySelector('#num-display').textContent = n;
})

// Reset of the array with the shuffled numbers
const btn = document.querySelector('.btn-reset');
btn.addEventListener('click', () => {
    numbers = [];
    shuffle(numbers);
    bingoNumbers = [];
    document.querySelector('#num-display').textContent = 0;
})