// Teddy Day Quotes
const quotes = [
  "You are my teddy, my love, my forever 🧸❤️",
  "Like a teddy bear, you make my life warm and safe 💕",
  "I don’t need a teddy when I have you 🤍",
  "You are the hug my heart needs every day 🧸",
  "My favorite place is right next to you 💖",
  "You are soft like a teddy and strong like my love ❤️",
  "Every day feels special when you are with me 🥰"
];

// Select random quote
const quoteText = document.getElementById("quoteText");
const randomIndex = Math.floor(Math.random() * quotes.length);
quoteText.innerText = quotes[randomIndex];

// Button click function
function showTeddy() {
  document.getElementById("firstScreen").style.display = "none";
  document.getElementById("teddyScreen").style.display = "block";
}
