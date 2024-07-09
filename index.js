let heroName = "Just Alex"
let heroXp = 9652
let heroLevel 

if (heroXp < 1000) {
    heroLevel = "Iron"
} else if (heroXp <= 2000){
    heroLevel =  "Bronze"
} else if (heroXp <= 5000){
    heroLevel = "Gold"
} else if (heroXp <= 8000) {
    heroLevel = "Platinum"
} else if (heroXp <= 9000){
    heroLevel = "Ascendent"
} else if (heroXp <= 10000){
    heroLevel = "Imortal"
} else {
    heroLevel = "Radiant"
}
console.log("The hero " + heroName + " is level " + herol)