let gamestarted = false
let timer = 15000
let score = 0
let currentquestion = 0
let startTimer = false
let randomanswer = []

//all of the questions images answes and correct answers
const questions =
  [{
    question: "How many movies does Shrek have?",
    answers: [7, 5, 4, 6],
    img: 'Images/question 1.jpeg',

    correct: 6
  },
  {
    question: "What are the names of the kids Shrek had?",
    answers: ["Felicia, Fergus and Farkle", "Frank, Fernando and Faith", "That kid, The other kid and that one", "They do not have names"],
    img: "Images/question 2.jpeg",

    correct: "Felicia, Fergus and Farkle"
  },
  {
    question: "What kind of creature is Shrek?",
    answers: ["An ogre", "A goblin", "Just a human painted green", "The green goblin"],
    img: 'Images/question 3.jpeg',

    correct: "An ogre"
  },
  {
    question: "Where is Shrek's house located?",
    answers: ["In the sewer", "In a city", "A swamp", "In your closet"],
    img: 'Images/question 4.jpeg',

    correct: "A swamp"
  },
  {
    question: "What song is considered the iconic Shrek song?",
    answers: ["Like Wow!", "I'm a Believer", "Bad reputation", "All Star"],
    img: 'Images/question 5.jpeg',

    correct: "All Star"
  },
  {
    question: null,
    answers: [null, null, null, null],
    img: 'Images/end.png',

    correct: "null"
  }]

function setup() {
  createCanvas(1000, 600);
  background(176, 220, 0);
  createStartButton()
}

//load all the images into the loadedimage variable
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

  //draw a rectangle that makes the timer show up
  rect(83, 80, 90, 200)

  //if the start timer = true start the countdown of 15 seconds
  if (startTimer == true) {
    timer = timer - deltaTime
  }

  //when the time is over reset the timer
  if (timer < 0) {
    timer = 15000
  }

  //and give it a wrong answer
  if (timer < 100) {
    wrongAnswer()
  }

  textSize(50)
  fill(0)

  //make the timer show up on screen
  text(round(timer / 1000), 100, 250)

  //make it so that the timer doesnt show up at the main screen
  if (startTimer == false) {
    strokeWeight(0)
    fill(176, 220, 0)
    rect(83, 80, 90, 200)
  }

  textSize(30);
  fill(121, 90, 45);
  textFont("Comic Sans MS")

  //if the game hasnt started show the name of the quiz on screen
  if (gamestarted == false) {
    textSize(50)
    text("The ULTIMATE shrek quiz", 175, 100)
  }
  
  //if it did start show the score and questions
  if (gamestarted == true && currentquestion < questions.length - 1) {
    textSize(30);
    fill(121, 90, 45);
    textFont("Comic Sans MS")
    text("score:" + score, 875, 35)
    text(questions[currentquestion].question, 220, 100);
  }
}

//create the start button for the home screen
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

//create the quit button for when you ar e doing the quiz
function createQuitButton() {
  quitButton = createButton("Quit")
  quitButton.hide()
  quitButton.style("font-size", "5")
  quitButton.style("font-family", "Comic Sans MS")
  quitButton.style('background-color', 'red')
  quitButton.position(10, 10)
  quitButton.mousePressed(stop)
}

//when you click the star button start the quiz
function start() {
  gamestarted = true
  startButton.hide()
  quitButton.show()
  background(176, 220, 0);
  startTimer = true
  buildButtons();

  //show the question
  showQuestion(questions[currentquestion]);
}

//when you click quit the quiz stops and resets your score
function stop() {
  background(176, 220, 0);
  gamestarted = false
  quitButton.position(10, 10)
  quitButton.size(50, 22)
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

//go to the next question when you clicked an answer or the timer was 0
function nextQuestion() {
  timer = 15000
  background(176, 220, 0)
  currentquestion++
  if (currentquestion == 5) {
    theEnd()
    return
  }
  showQuestion(questions[currentquestion])
  text(questions[currentquestion].question, 220, 100)
}

//make all the buttons 
function buildButtons() {
  textSize(30);
  fill(121, 90, 45);
  textFont("Comic Sans MS")

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

//make the right answers show up in the buttons and make the right one give you a point
function showQuestion(question) {
  if (currentquestion < 5) {
    image(question.loadedimage, 275, 125, 400, 200)
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
}

//when the answer is good +1 score and go to the next question
function goodAnswer() {
  score++
  nextQuestion()
}

//when the answer is wrong go to the next question whitout a point
function wrongAnswer() {
  nextQuestion()
}

//when all the questions are done go to the end page
function theEnd() {
  q1answer1Button.hide()
  q1answer2Button.hide()
  q1answer3Button.hide()
  q1answer4Button.hide()
  quitButton.size(400, 40)
  quitButton.position(300, 400)
  startTimer = false
  showEndScore = true
  textSize(50)
  text("Score:" + score + "/5", 350, 250)
}