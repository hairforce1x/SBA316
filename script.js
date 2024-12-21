// const cards = document.createElement("div")

// document.body.appendChild(cards)
// Step 1 generate cards using createElement
for (i = 0; i<4; i++){
    const cards = document.createElement("div") // create at least one elemnt using createElementCache at least one element using querySelector
    cards.classList.add("cards") 
    document.body.appendChild(cards) // use appendChild to add new elements to DOM
}
const allCards = document.querySelectorAll('.cards') // Cache at least one element using querySelector
console.log(allCards)
// Step 2 create function to handle click event of cards


// Step 3 compare cards



// Step 4 check for condition (all cards flipped) that game is over



// Step 5 Add simple form with validation