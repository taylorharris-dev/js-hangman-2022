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
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert("Please enter a single letter")
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess
                remainingLetters--
            }
        }
    }
}

alert(answerArray.join(" "))
alert("Good job! The answer was " + word)