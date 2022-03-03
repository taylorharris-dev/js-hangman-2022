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

