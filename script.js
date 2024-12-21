// Step 1 generate cards using createElement
for (i = 0; i<2; i++){
    const cards = document.createElement("div") // create at least one elemnt using createElement
    cards.classList.add('cards')
    document.body.appendChild(cards) // use appendChild to add new elements to DOM
}
const allCards = document.querySelectorAll('.cards') // Cache at least one element using querySelector
console.log(allCards)

// Step 2 create function to handle click event of cards
allCards.forEach(card => {
    card.addEventListener('click', cardClick); // 
})

function cardClick(e) {
    const clickedCard = e.target;
    clickedCard.classList.add('clicked');
    clickedCard.textContent = 'clicked'; // Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
    clickedCard.style.backgroundColor = 'green'; // Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties. && Modify at least one attribute of an element in response to user interaction.
    console.log('clicked:', clickedCard);
}

// Step 3 compare two cards



// Step 4 check for condition (all cards flipped) that game is over



// Step 5 Add simple form with validation