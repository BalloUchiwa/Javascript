const ComputerChoiceDisplay = document.getElementById('computerChoice')
const UserChoiceDisplay = document.getElementById('UserChoice')
const Result = document.getElementById('Result')

const Button = document.querySelectorAll('button')
let userchoice
let computerchoice
let result
Button.forEach(ButtonClick => ButtonClick.addEventListener('click',(e) => {
    userchoice = e.target.id 
    UserChoiceDisplay.innerHTML =userchoice
    GenerateComputerChoice()
    getResult()
}))
function GenerateComputerChoice() {
const RandomNumber = Math.floor(Math.random() * Button.length) /*Math.random is to generate a random number while math.floor is to round up the number to an integer*/
console.log(RandomNumber)
if (RandomNumber === 0){
    computerchoice = 'Rock'
}
if (RandomNumber === 1){
    computerchoice = 'Paper'
}
if (RandomNumber === 2){
    computerchoice = 'Scissors'
}
ComputerChoiceDisplay.innerHTML = computerchoice
}

function getResult(){
    if(computerchoice === userchoice){
        result = 'Its a draw'
    }
    if(computerchoice === 'Rock' && userchoice === 'Paper'){
        result = 'User wins'
    }
    if(computerchoice === 'Paper' && userchoice === 'Scissors'){
        result = 'User wins'
    }
    if(computerchoice === 'Scissors' && userchoice === 'Rock'){
        result = 'User wins'
    }
    if(computerchoice === 'Paper' && userchoice === 'Rock'){
        result = 'Computer wins'
    }
    if(computerchoice === 'Rock' && userchoice === 'Scissors'){
        result = 'Computer wins'
    }
    if(computerchoice === 'Scissors' && userchoice === 'Paper'){
        result = 'Computer wins'
    }
    Result.innerHTML = result
}