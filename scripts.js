var words = [
    "quizzify",
    "jukebox",
    "lightbulb",
    "radio",
    "satellite",
    "meteor",
    "galaxy",
    "stars",
    "penguin",
    "fox"
]

var word = words[Math.floor(Math.random() * words.length)]

console.log(word)

var answerArray = []
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length

while (remainingLetters > 0) {
    alert(answerArray.join(" "))

    var guess = prompt("Guess a letter, or click Cancel to stop playing.") // Update the game state with a guess.
}