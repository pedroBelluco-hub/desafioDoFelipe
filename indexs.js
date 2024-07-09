/*First, we have an output message being displayed on the screen using the console with the log method; Right after that, we have variables that, if they are text, always use double quotes. We also have constants being declared in POKEMON GO SAYS:*/
console.log("Enter your player name:")
let playerName = "Pedrin dos teclado"
console.log("Welcome " + playerName)
console.log(playerName + " has joined the server")
const notification = "Pokemon GO says: "
console.log(notification + "There's a new Pokemon in the region")
console.log(notification + "You have been defeated")

/*

*/

/*Values were assigned to the variables, and since they are variables, after the first output message, I created another output reassigning the coffee variable.*/  
let coffeeJar = "Pilão"
let sugarJar = "Cristal"
let biscuitJar = "Maizena"
console.log("In grandma's kitchen today we have: " + coffeeJar + " - " + sugarJar + " - " + biscuitJar)
coffeeJar = "Três corações"
console.log("In grandma's kitchen today we have: " + coffeeJar + " - " + sugarJar + " - " + biscuitJar)

/* PS: Different types of variables BUT NOT ALL OF THEM! : "String" we use for text, Number without "" and boolean that says if it's true or false.*/
let pokemonName = "Pikachu" 
let pokemonGender = "male"
let pokemonLevel = 20
let hitPoints = 45
let selectable = true

/*

*/

/*Creating an ARRAY (vetor), a collection.*/   
let pokemon = ["Pikachu" , "Charmander" , "Bulbasaur"]

/* Creating an array (vetor) and selecting specific information within each vector present in the array, in order to select it, use [ ] and the corresponding number, always starting with ZERO.*/
let pokemonNames = ["Pikachu", "Charmander", "Bulbasaur"]
let pokemonTeam = [
  ["Pikachu", "male", 1],
  ["Charmander", "female", 4],
  ["Bulbasaur", "male", 3]
]
console.log("The Pokemon " + pokemonTeam[0][0] + " is " + pokemonTeam[0][1] + " and is at level " + pokemonTeam[0][2])
console.log("The Pokemon " + pokemonTeam[1][0] + " is " + pokemonTeam[1][2] + " and is at level " + pokemonTeam[1][2])
console.log("The Pokemon " + pokemonTeam[2][0] + " is " + pokemonTeam[2][1] + " and is at level " + pokemonTeam[2][2])

/*

*/

/*Arithmetic operators*/
let age = 30
age = 30 + 6
console.log("Addition operation starting from the result 30 - " + age)

age = 30 - 6
console.log("Subtraction operation starting from the result 30 - " + age)

/*Multiplication operation*/
let productPrice = 100.99
let priceWithTax = productPrice * 2
console.log(priceWithTax)

/*Division operation*/
let groceryBill = 50
let peopleToSplit = 2
console.log("Division operation: " + groceryBill / peopleToSplit)
/* NOT ALL OF THE OPERATOS WERE PRESENTED, KEEP UP WITH THE OTHERS NOT MENTIONED LIKE: %, ++, --, ===, ETC.*/

/*

*/

/* Working with conditional structures (if, else) */
let hasEggs = false
let itemsPurchased = " "
if (hasEggs){
 itemsPurchased = "Milk"
}
else{
      console.log("Stopped by the frozen food section")
      itemsPurchased = "Frozen lasagna"
}

console.log("Items purchased: " + itemsPurchased)

//Else if E.g.
let hungerLevel = 10

if (hungerLevel === 1) {
   console.log("A little hungry")
} else if (hungerLevel === 2) {
   console.log("Very hungry")
} else {
   console.log("You would eat more than Woody Woodpecker")
}
