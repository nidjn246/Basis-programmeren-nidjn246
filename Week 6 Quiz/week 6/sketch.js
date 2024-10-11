let timer = 15000
let score = 0
let currentquestion = 0
let startTimer = false
let randomanswer = []
const questions =
  [{
    question: "How many movies does Shrek have?",
    answers: [7, 5, 4, 6],
    img: '/../Images/question 1.jpeg',

    correct: 6
  },
  {
    question: "What are the names of the kids Shrek had?",
    answers: ["Frank, Fernando and Faith", "Felicia, Fergus and Farkle", "That kid, The other kid and that one", "They do not have names"],
    img: "/../Images/question 2.jpeg",

    correct: "Felicia, Fergus and Farkle"
  },
  {
    question: "What kind of creature is Shrek?",
    answers: ["An ogre", "A goblin", "Just a human painted green", "The green goblin"],
    img: '/../Images/question 3.jpeg',

    correct: "An ogre"
  },
  {
    question: "Where is Shrek's house located?",
    answers: ["In the sewer", "In a city", "A swamp", "In your closet"],
    img: '/../Images/question 4.jpeg',

    correct: "A swamp"
  },
  {
    question: "What song is considered the iconic Shrek song?",
    answers: ["Like Wow!", "I'm a Believer", "Bad reputation", "All Star"],
    img: '/../Images/question 5.jpeg',

    correct: "All Star"
  }]

function setup() {
  createCanvas(1000, 600);
  background(176, 220, 0);
  createStartButton()
}

function preload() {
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].img) {
      questions[i].loadedimage = loadImage(questions[i].img)
    }
    else {
      questions[i].loadImage = 0
    }
  }
}

function draw() {
  strokeWeight(0)
  fill(176, 220, 0)
  rect(83, 80, 90, 200)
  if (startTimer == true) {
    timer = timer - deltaTime
  }
  if (timer < 0) {
    timer = 15000
  }
  if (timer < 10) {
    wrongAnswer()
  }
  textSize(50)
  fill(0)
  text(round(timer / 1000), 100, 250)
  if (startTimer == false) {
    strokeWeight(0)
    fill(176, 220, 0)
    rect(83, 80, 90, 200)
  }
  textSize(30);
  fill(121, 90, 45);
  textFont("Comic Sans MS")
}

function createStartButton() {
  startButton = createButton("start")
  startButton.size(400, 40)
  startButton.style("font-size", "20px")
  startButton.style("font-family", "Comic Sans MS")
  startButton.style('background-color', "darkgreen")
  startButton.style("border-radius", "15px")
  startButton.style("border", "0px")
  startButton.position(300, 400)
  startButton.mousePressed(start)
  createQuitButton()
}
function createQuitButton() {
  quitButton = createButton("Quit")
  quitButton.hide()
  quitButton.style("font-size", "5")
  quitButton.style("font-family", "Comic Sans MS")
  quitButton.style('background-color', 'red')
  quitButton.position(10, 10)
  quitButton.mousePressed(stop)
}

function start() {
  startButton.hide()
  quitButton.show()
  background(176, 220, 0);
  startTimer = true
  buildButtons();
  showQuestion(questions[currentquestion]);
}

function stop() {
  background(176, 220, 0);
  startButton.show()
  quitButton.hide()
  q1answer1Button.hide()
  q1answer2Button.hide()
  q1answer3Button.hide()
  q1answer4Button.hide()
  currentquestion = 0
  score = 0
  startTimer = false
}

function nextQuestion() {
  background(176, 220, 0)
  currentquestion++

  showQuestion(questions[currentquestion])
  text(questions[currentquestion].question, 220, 100)
}

function buildButtons() {
  textSize(30);
  fill(121, 90, 45);
  textFont("Comic Sans MS")
  text(questions[currentquestion].question, 220, 100);
  q1answer1Button = createButton("1")
  q1answer1Button.position(200, 350)
  q1answer1Button.size(250, 30)

  q1answer2Button = createButton("2")
  q1answer2Button.position(500, 350)
  q1answer2Button.size(250, 30)

  q1answer3Button = createButton("3")
  q1answer3Button.position(200, 400)
  q1answer3Button.size(250, 30)

  q1answer4Button = createButton("4")
  q1answer4Button.position(500, 400)
  q1answer4Button.size(250, 30)
}
function kaasTostie () {

for (let i = 0; i < 4; i++) {
randomanswer = [[round(random([i]))], [round(random([i]))], [round(random([i]))], [round(random([i]))]]
}
}

function showQuestion(question) {
  timer = 0
  image(question.loadedimage, 275, 125, 400, 200)
  text("score:" + score, 875, 35)
  q1answer1Button.html(question.answers[0])
  q1answer2Button.html(question.answers[1])
  q1answer3Button.html(question.answers[2])
  q1answer4Button.html(question.answers[3])

  if (question.answers[0] == question.correct) {
    q1answer1Button.mousePressed(goodAnswer);
  }
  else {
    q1answer1Button.mousePressed(wrongAnswer)
  }

  if (question.answers[1] == question.correct) {
    q1answer2Button.mousePressed(goodAnswer);
  }
  else {
    q1answer2Button.mousePressed(wrongAnswer)
  }

  if (question.answers[2] == question.correct) {
    q1answer3Button.mousePressed(goodAnswer);
  }
  else {
    q1answer3Button.mousePressed(wrongAnswer)
  }

  if (question.answers[3] == question.correct) {
    q1answer4Button.mousePressed(goodAnswer);
  }
  else {
    q1answer4Button.mousePressed(wrongAnswer)
  }
}

function goodAnswer() {
  console.log("goed")
  score++
  nextQuestion()
}

function wrongAnswer() {
  console.log("fout")
  nextQuestion()
}