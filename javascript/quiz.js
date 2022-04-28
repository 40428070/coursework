
var choices = Array.from(document.querySelectorAll('.choice-text'));
let currentQuestion ={}
let acceptingAnswers = true
let points = 0
let questionCounter = 0
var time = 10;
var cinterval;


let availableQuestion = [
    {
        quizz: 'what is 2+9?',
        choice1: '2',
        choice2: '11',
        choice3: '21',
        choice4: '4',
        answer: 2,
    },
    {
        quizz: 'what is 22x2?',
        choice1: '44',
        choice2: '222',
        choice3: '21',
        choice4: '17',
        answer: 1,
    },
    {
        quizz: 'what is 2+2?',
        choice1: '2',
        choice2: 'fish',
        choice3: '4',
        choice4: '17',
        answer: 3,
    },
    {
        quizz: 'what is 2x33-3?',
        choice1: '2',
        choice2: '1',
        choice3: '21',
        choice4: '63',
        answer: 4,
    },
    {
        quizz: 'what is 4x5/2?',
        choice1: '2',
        choice2: '3',
        choice3: '22',
        choice4: '10',
        answer: 4,
    },
    {
        quizz: 'what is 2+2-2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '0',
        answer: 1,
    },
    {
        quizz: 'what is 6-2?',
        choice1: '4',
        choice2: '3',
        choice3: '21',
        choice4: '17',
        answer: 1,
    },
    {
        quizz: 'what is 2/2?',
        choice1: '2',
        choice2: '0',
        choice3: '1',
        choice4: '17',
        answer: 3,
    },
    {
        quizz: 'what is 2+4?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '6',
        answer: 4,
    },
    {
        quizz: 'what is 2x2?',
        choice1: '2',
        choice2: '22',
        choice3: '16',
        choice4: '4',
        answer: 4,
    },
    {
        quizz: 'what is 6x12?',
        choice1: '72',
        choice2: '60',
        choice3: '12',
        choice4: '612',
        answer: 1,
    },
    {
        quizz: 'what is 81/3?',
        choice1: '9',
        choice2: '3',
        choice3: '27',
        choice4: '33',
        answer: 3,
    },
    {
        quizz: 'what is 6/2x4?',
        choice1: '9',
        choice2: '12',
        choice3: '3',
        choice4: '6',
        answer: 2,
    },
    {
        quizz: 'what is 3+6/2+4?',
        choice1: '4',
        choice2: '12',
        choice3: '3',
        choice4: '10',
        answer: 4,
    },
    {
        quizz: 'what is the graph of y=x?',
        choice1: '<img src="images/x.png" data-number="1"></img>',
        choice2: '<img src="images/logx.png" data-number="2"></img>',
        choice3: '<img src="images/xx.png" data-number="3"></img>',
        choice4: '<img src="images/sinx.png" data-number="4"></img>',
        answer: 1,
    },
    {
        quizz: 'what is the graph of y=log(x)?',
        choice1: '<img src="images/x.png" data-number="1"></img>',
        choice2: '<img src="images/logx.png" data-number="2"></img>',
        choice3: '<img src="images/xx.png" data-number="3"></img>',
        choice4: '<img src="images/sinx.png" data-number="4"></img>',
        answer: 2,
    },
    {
        quizz: 'what is the graph of y=sin(x)?',
        choice1: '<img src="images/x.png" data-number="1"></img>',
        choice2: '<img src="images/logx.png" data-number="2"></img>',
        choice3: '<img src="images/xx.png" data-number="3"></img>',
        choice4: '<img src="images/sinx.png" data-number="4"></img>',
        answer: 4,
    },
    {
        quizz: 'what is the graph of y=x^2?',
        choice1: '<img src="images/x.png" data-number="1"></img>',
        choice2: '<img src="images/logx.png" data-number="2"></img>',
        choice3: '<img src="images/xx.png" data-number="3"></img>',
        choice4: '<img src="images/sinx.png" data-number="4"></img>',
        answer: 3,
    },
    {
        quizz: 'what is 7x3?',
        choice1: '21',
        choice2: '7',
        choice3: '3',
        choice4: '14',
        answer: 1,
    },
    {
        quizz: 'what is 5+11-3?',
        choice1: '4',
        choice2: '12',
        choice3: '15',
        choice4: '13',
        answer: 4,
    },
    {
        quizz: 'what is 16+12/4-3?',
        choice1: '12',
        choice2: '16',
        choice3: '30',
        choice4: '17',
        answer: 2,
    },
    {
        quizz: 'what is 7x8?',
        choice1: '65',
        choice2: '68',
        choice3: '56',
        choice4: '12',
        answer: 3,
    },
    {
        quizz: 'what is 4+(12x73+3)x0-16?',
        choice1: '0',
        choice2: '-12',
        choice3: '3',
        choice4: '12',
        answer: 2,
    },
    {
        quizz: 'what is -3+24/12+11?',
        choice1: '11',
        choice2: '12',
        choice3: '-3',
        choice4: '10',
        answer: 4,
    },

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5
const MAX_QUESTION_TIME = 5

generateQuestions = (availableQuestion) =>{
    var questions = []
    for(i=0;i<MAX_QUESTIONS;i++){
        randomIndex = Math.floor( Math.random() * availableQuestion.length)
        questions.push(availableQuestion[randomIndex])
        availableQuestion.splice(randomIndex,1)
    }
    return questions
}
start = () => {
    questionCounter = 0
    points = 0
    correct = 0
    missed = 0
    wrong = 0
    ttime =0
    questions = generateQuestions(availableQuestion)
    countdown.play();
  

    NextQuestion()
}

NextQuestion = () =>{
        
    if(questionCounter >= MAX_QUESTIONS ){
        localStorage.setItem('highScore', points)
        statistic = [MAX_QUESTIONS,correct,missed,wrong,ttime]
        console.log(statistic)
        localStorage.setItem('statistic',JSON.stringify(statistic))
        return window.location.assign('quizresult.html')
    }
    questionCounter++
    progresstext.innerText = 'Question '+questionCounter +' of '+ MAX_QUESTIONS
    bar.style.width=(questionCounter/MAX_QUESTIONS)*100 + '%'
    currentQuestion = questions[questionCounter-1]
    question.innerText = currentQuestion.quizz
    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerHTML = currentQuestion['choice'+number]
    })
    
    acceptingAnswers = true
    //Timer function ----------------------------------------
    time =MAX_QUESTION_TIME
    document.getElementById('timer').innerHTML = time;
    if( !countdown.paused){
        countdown.currentTime=parseInt((questionCounter/MAX_QUESTIONS)*30)-time;
        countdown.play();
        play_audio.src='images/audio_on.png'
    }
      // 1,000 means 1 second.
    cinterval = setInterval('setTimer()', 1000);
}

function setTimer(){
    // decrease timer
    
    time--;
    document.getElementById('timer').innerHTML = time;
    
    if(time < 0){
        missed ++
        ttime += MAX_QUESTION_TIME
        clearInterval(cinterval)
        NextQuestion()
    }
}

choices.forEach( choice => {
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return
    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']
    if (selectedAnswer == currentQuestion.answer ){
        correct_answer.currentTime = 0
        correct_answer.play()
        changeStatus = 'correct'
        addPoints(SCORE_POINTS)
        correct ++
        
        }
    else {
        wrong_answer.currentTime = 0
        wrong_answer.play()
        changeStatus = 'incorrect'
        losePoints((SCORE_POINTS/2))  
        wrong ++
        
    }
    ttime += (MAX_QUESTION_TIME-time)
    console.log("correct: "+correct+" wrong: "+wrong+" missed: "+missed+" Total time: "+ttime)
    selectedChoice.parentElement.classList.add(changeStatus)
   

    setTimeout( ()=>{
        acceptingAnswers = true
        selectedChoice.parentElement.classList.remove(changeStatus)
        clearInterval(cinterval);
        NextQuestion()
    }, 300)
})
})

addPoints = num => {
    points += num
    score.innerText = points
}

losePoints = num => {
    points -= num
    score.innerText = points
}

function countdown_play(){
    if( countdown.paused){
        countdown.currentTime=parseInt((questionCounter/MAX_QUESTIONS)*30)-time;
        console.log(countdown.currentTime)
        countdown.play();
        play_audio.src='images/audio_on.png'
    }
    else{
        play_audio.src='images/audio_off.png'
        countdown.pause();
    }
    
}

window.onload = start




document.addEventListener("contextmenu", function (e){
    e.preventDefault();
    window.alert('AntiCheating system prevention!\nThe user is not allowed to right click on this page!')  
}, false);