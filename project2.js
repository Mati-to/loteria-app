
// let btnNewGame = document.querySelector('.btn-new-game');
// btnNewGame.addEventListener('click', () => {
    
// })

// Genera un array con numero del 1 al 99
let nums = [];
for (let i = 1; i <= 99; i++) {
    nums.push(i);
}
// Array que tendrá numeros aleatorios
let ranNums = [],
i = nums.length,
j = 0;
while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}

console.log(ranNums)

// Sacar numero de ranNums al azar 
let btnTakeNum = document.querySelector('.button-take-num');
let numUsed = [];
btnTakeNum.addEventListener('click', () => {
    numUsed = ranNums.pop();
    console.log(numUsed)
    if(ranNums.length < 95) {
        console.log(ranNums)
    }
})



