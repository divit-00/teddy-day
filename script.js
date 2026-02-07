const quotes = [
  "You are my teddy, my love, my forever 🧸❤️",
  "Your hug feels better than any teddy bear 🤍",
  "I don’t need a teddy when I have you 💕",
  "You are the softest place my heart knows 🧸",
  "My favorite comfort is you 🥰",
  "You make my world warm and safe ❤️",
  "Forever feels right with you 💖"
];

let index = 0;
const quoteText = document.getElementById("quoteText");

function showQuotes() {
  quoteText.innerText = quotes[index];
  quoteText.style.animation = "none";
  quoteText.offsetHeight; // reset animation
  quoteText.style.animation = "fadeSlide 3s ease forwards";

  index++;
  if (index >= quotes.length) {
    index = 0; // loop again
  }
}

// Start quotes
showQuotes();
setInterval(showQuotes, 3000);

// Button click
function showTeddy() {
  document.getElementById("firstScreen").style.display = "none";
  document.getElementById("teddyScreen").style.display = "block";
}
