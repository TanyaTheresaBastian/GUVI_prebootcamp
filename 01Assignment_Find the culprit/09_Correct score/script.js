let value = prompt('How many runs you scored in this ball');
let score = parseInt(value);
if (score === 4) {
      console.log("You hit a Four");
} else if (score === 6) {
      console.log("You hit a Six");
} else {
      console.log("Score: " + score);
}