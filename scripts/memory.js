

//create global variables
let colourPool = ["red", "red", "orange", "orange", "yellow", "yellow", "green", "green", "blue", "blue", "purple", "purple"];
//when the user clicks on a card for the first time, we'll pick a random colour from this array and assign it to that card

//clickedCards will store the cards the user is currently clicking on, by ID - when two cards are in the array, we'll check if there is a matching ID, and if there is, then there is a match.  However, if the IDs do not match, then we'll flip the two cards back over
let clickedCards = [];

//these two globals are to keep track of the user's progress - one for their score, and one for the number of moves
let score=0, moves=0;
//you can declare multiple variables with one 'let' keyword, by separating them with commas

/********************************
 * 	Scripts added in class
********************************/

//use a loop to add multiple cards
// a for loop has three parts:
//  set the counter variable (let i=0) and start it at a number
//  give the loop a condition to keep counting (keep going as long as i is less than 12)
//  tell the counter to increment each time the loop runs (i++ = add 1 to i)
for(let i=0; i<12; i++){

    //create the new card (a div element)
    const card = document.createElement("div");

    //add the class "card" to the new element
    card.classList.add("card");

    //create the paragraph element
    const para = document.createElement("p");

    //add the question mark inside the paragraph
    para.textContent = "?";

    //add the new paragraph to the card
    card.appendChild(para);

    //add an event listener to the card, when the user clicks
    //this actually says:
    // when the user clicks on a card, run the function "flipCard"
    card.addEventListener("click", flipCard);

    //add the card to the page
    document.querySelector("main").appendChild(card);
}

//when the user clicks on the card...
function flipCard(){
    
}

