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
const takeNum = document.querySelector('.btn-take-num');
takeNum.addEventListener('click', () => {
    if(n !== undefined) {
        n = numbers.pop(0);
        bingoNumbers.push(n);
        document.querySelector('#num-display').textContent = n;
        displayBingoNumbers();
    }
})

// Reset of the array with the shuffled numbers
const btn = document.querySelector('.btn-reset');
btn.addEventListener('click', () => {
    numbers = [];
    shuffle(numbers);
    bingoNumbers = [];
    document.querySelector('#num-display').textContent = 0;
    let e = document.querySelectorAll('.col-1');
    for (i of e) {
        i.remove();
    }
})

//* Display the bingo numbers in a grid container */
// Display numbers in n in a grid container
function displayBingoNumbers() {
    let col = document.createElement('div');
    col.classList.add('col-1');
    document.querySelector('.row').prepend(col);
    document.querySelector('.col-1').textContent = n;
}

