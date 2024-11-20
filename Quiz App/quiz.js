const container=document.querySelector(".container");
const questionBox=document.querySelector(".question");
const choicesBox=document.querySelector(".choices");
const nextBtn=document.querySelector(".nextBtn");
const score=document.querySelector(".scoreCard");
const alerts=document.querySelector(".alert");
const start=document.querySelector(".startBtn");
const timer=document.querySelector(".timer");

const quiz = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Manipulation Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is not a programming language?",
        choices: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "HTML"
    },
    {
        question: "What is the primary purpose of CSS?",
        choices: ["To structure content", "To add interactivity", "To define the behavior of web pages", "To style HTML elements"],
        answer: "To style HTML elements"
    },
    {
        question: "What does the 'C' in CSS stand for?",
        choices: ["Cascading", "Content", "Creative", "Crazy"],
        answer: "Cascading"
    },
    {
        question: "Which of the following is a backend programming language?",
        choices: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "Python"
    },
    {
        question: "What does 'HTTP' stand for?",
        choices: ["Hyper Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol", "High Transfer Text Protocol"],
        answer: "Hyper Text Transfer Protocol"
    },
    {
        question: "Which of the following is NOT a commonly used HTTP method?",
        choices: ["GET", "POST", "PUSH", "DELETE"],
        answer: "PUSH"
    }
];


//Start button to start the quiz
start.addEventListener("click",()=>{
    start.style.display="none";
    container.style.display="block";
    startQuiz();
})


//start quiz function to run showQuestion()
const startQuiz=()=>{
    time=10;
    timer.style.display="flex";
    showQuestion();
}

//next button
nextBtn.addEventListener("click",()=>{
    let selected=document.querySelector(".selected");
    if(!selected && nextBtn.textContent=="Next"){
            displayAlert("Please select your answer")
    }
    if(quizOver){
        currentQuestionIndex=0;
        nextBtn.textContent='Next';
        score.textContent="";
        quizOver=false;
        correct=0;
        startQuiz();
    }
    checkAnswer();
})


//Start timer
const startTimer=()=>{
    clearInterval(timeId);
    timer.textContent=time;
    const count=()=>{
        time--;
        timer.textContent=time;
        if(time===0){
            let confirmUser=confirm("Time Up!!Do you want to play again?");
            if(confirmUser){
                time=10;
                currentQuestionIndex=0;
                correct=0;
                startQuiz();
            }else{
                start.style.display="block";
                container.style.display="none";
                correct=0;
                currentQuestionIndex=0;
                return;
            }
        }
    }
    timeId=setInterval(count,1000)
}


//Stop timer
const stopTimer=()=>{
    clearInterval(timeId);
}


//Function to display alert
const displayAlert=(msg)=>{
    alerts.style.display="block";//to see the alerts
    alerts.textContent=msg;
    setTimeout(()=>{
        alerts.style.display="none"
    },2000)
}


//Function to check answer
const checkAnswer=()=>{
    let selectedAns=document.querySelector(".selected");
    let finalAns=selectedAns.textContent;
    if(finalAns===quiz[currentQuestionIndex].answer){
        displayAlert("Correct answer")
        correct++;
    }
    else{
        displayAlert("Incorrect answer");
    }
    time=10;
    currentQuestionIndex++;
   if(currentQuestionIndex<quiz.length){ //this is for changing ques.
        startQuiz();
   }else{
    showScore();
    stopTimer();
   }
}


//Making variables
let currentQuestionIndex=0;
let correct=0;
let quizOver=false;
let time=10;
let timeId=null;



//Function to show score
const showScore=()=>{
    questionBox.textContent="";
    choicesBox.textContent="";
    displayAlert("You have completed the quiz");
    nextBtn.textContent="Play Again";
    timer.style.display="none";
    quizOver=true;
    score.textContent=`You scored ${correct} out of ${quiz.length}`;
}



//Function to show question with option
const showQuestion=()=>{
    let ques=quiz[currentQuestionIndex];
    questionBox.textContent=ques.question;
    choicesBox.textContent="";
    for(let i=0;i<ques.choices.length;i++){
        let choice=ques.choices[i];
        let choiceDiv=document.createElement("div");
        choiceDiv.textContent=choice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);
        choiceDiv.addEventListener("click",()=>{
            if(choiceDiv.classList.contains('selected')){ //used for styling the option when clicked
                choiceDiv.classList.remove('selected')
            }else{
                 choiceDiv.classList.add('selected')
             }
        })
    }
    if(currentQuestionIndex<quiz.length){
        startTimer();
    }
}




