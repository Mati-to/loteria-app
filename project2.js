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
    if (n !== undefined) {
        n = numbers.pop(0);
        bingoNumbers.push(n);
        document.querySelector('#num-display').textContent = n;
        displayBingoNumbers();
    }
})

// Reset of the array with the shuffled numbers
// Reset the interval timer 
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
    clearInterval(myTimer);
    document.querySelector('.btn-interval').disabled = false;
})

// Display numbers on screen adding a new element everytime
// a number is picked
function displayBingoNumbers() {
    let col = document.createElement('div');
    col.classList.add('col-1');
    document.querySelector('.row').prepend(col);
    document.querySelector('.col-1').textContent = n;
}

// Display the numbers automatically within a certain period
// of time, which is specified by the user between certain options.
const btnInterval = document.querySelector('.btn-interval');
const intervalInput = document.querySelector("#interval-input");
let myTimer;
function disableBtn(){
    document.querySelector('.btn-interval').disabled = true;
}

btnInterval.addEventListener('click', () => {
    const intervalValue = intervalInput.value;
    myTimer = setInterval(() => {
        if (n !== undefined && intervalValue >= 5) {
            n = numbers.pop(0);
            bingoNumbers.push(n);
            document.querySelector('#num-display').textContent = n;
            displayBingoNumbers();
        }
    }, intervalValue * 1000);
})