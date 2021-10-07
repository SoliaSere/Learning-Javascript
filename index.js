
This command was originally in the body of the index.html file, but according to the instructor, that is a beginners way to employ javascript.

Also, this line is supossed to be at the beginning of the index.js page, but it's too advanced for my knoweldge level.


document.getElementById("count-el").innerText = 5




/*/Note: Cannot put console.log command above the variable, 
as javascript reads code from top to bottom

ex:

console.log(myAge)

let myAge = 0

result: Error cannot access 'myAge' before initialization


/*/

//Defining Variables with Javascript//


let myAge = 21

console.log(myAge)




//New exercise = Use javascript as a calculator between variables//


let firstBatch = 5

let secondBatch = 7

let count = firstBatch + secondBatch

console.log(count)


//Console Answer was 12//



let myAge = 21

let humandogratio = 7

let myDogAge = myAge * humandogratio

console.log(myDogAge)

//console answer was 147//




//learning to reassign variables after already giving them a value//

//As mentioned before, Javascript reads code from top to bottom
//so giving a variable another value after already defining it 
//will make the console log only see the one on the bottom

let count = 5

count = 3

count = 1

console.log(count)

//console log response = 1



//exercise: Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70


let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)
