const questions=[
    {
        question:"Who holds the record for the highest individual score in a single ODI match?",
        answers:[
            {text:"Rohit Sharma",correct:true},
            {text:"Sachin Tendulkar",correct:false},
            {text:"Chris Gayle",correct:false },
            {text:"Martin Guptill",correct:false }
        ]
    },
    {
        question:"Which cricketer holds the record for the most runs in a single World Cup tournament?",
        answers:[
            {text:"Rohit Sharma",correct:false},
            {text:"Sachin Tendulkar",correct:false},
            {text:"Virat Kohli",correct:true },
            {text:"Martin Guptill",correct:false }
        ]
    },
    {
        question:"Which cricketer has the record for the most ducks in international cricket?",
        answers:[
            {text:"Sanath Jayasuriya",correct:false},
            {text:"Muttiah Muralitharan",correct:false},
            {text:"Courtney Walsh",correct:true },
            {text:"Wasim Akram",correct:false }
        ]
    },
    {
        question:"Which team chased down the highest total in a Test match, scoring 418 to win against Australia in 2003?",
        answers:[
            {text:"England",correct:false},
            {text:" South Africa",correct:false},
            {text:"West Indies",correct:true },
            {text:"India",correct:false }
        ]
    },
    {
        question: "In 2016, which cricketer became the first to score four consecutive centuries in T20 internationals?",
        answers: [
            { text: "Brendon McCullum", correct: false },
            { text: "Virat Kohli", correct: false },
            { text: "David Warner", correct: false },
            { text: "Colin Munro", correct: true }
        ]
    },
    {
        question: "Who was the captain of the Australian team when they whitewashed England 5-0 in the Ashes 2013-14 series?",
        answers: [
            { text: "Michael Clarke", correct: true },
            { text: "Steve Smith", correct: false },
            { text: "Ricky Ponting", correct: false },
            { text: "Tim Paine", correct: false }
        ]
    },
    {
        question: "Which bowler became the fastest to take 100 wickets in ODI cricket, achieving this in just 44 matches in 2018?",
        answers: [
            { text: "Jasprit Bumrah", correct: false },
            { text: "Kagiso Rabada", correct: false },
            { text: "Rashid Khan", correct: true },
            { text: "Trent Boult", correct: false }
        ]
    },
    {
        question: "In the 2015 Cricket World Cup, which team scored the highest total in a single match, putting up 417/6?",
        answers: [
            { text: "South Africa", correct: true },
            { text: "Australia", correct: false },
            { text: "New Zealand", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "Which player won the ICC Cricketer of the Year award twice in the 2010s ?",
        answers: [
            { text: "Virat Kohli", correct: true },
            { text: "AB de Villiers", correct: false },
            { text: "Steve Smith", correct: false },
            { text: "Kumar Sangakkara", correct: false }
        ]
    },
    {
        question: "Who was the highest run-scorer in the ICC World Test Championship 2019-2021?",
        answers: [
            { text: "Marnus Labuschagne", correct: true },
            { text: "Joe Root", correct: false },
            { text: "Steve Smith", correct: false },
            { text: "Kane Williamson", correct: false }
        ]
    },
    {
        question: "Which cricketer scored the most runs in a single IPL season, amassing 973 runs in 2016?",
        answers: [
            { text: "David Warner", correct: false },
            { text: "Chris Gayle", correct: false },
            { text: "AB de Villiers", correct: false },
            { text: "Virat Kohli", correct: true }
        ]
    },
    {
        question: "Who holds the record for the best bowling figures in an ODI since 2010, with figures of 7/15?",
        answers: [
            { text: "Kagiso Rabada", correct: false },
            { text: "Mitchell Starc", correct: false },
            { text: "Trent Boult", correct: true },
            { text: "Rashid Khan", correct: false }
        ]
    }

];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion() {
    resetState();
let currentQuestion= questions[currentQuestionIndex];
let quesNo=currentQuestionIndex +1;
questionElement.innerHTML=quesNo +". "+ currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
const button=document.createElement("button");
button.innerHTML=answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if(answer.correct){
    button.dataset.correct=answer.correct;
}
button.addEventListener("click",selectAnswer);
});
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect =selectedBtn.dataset.correct==="true";
    if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    } 
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    let message=`You Scored ${score} out of ${questions.length} !`;
    const percentage=(score/questions.length)*100;
    if(percentage>=70){
        message+="Amazing! Your cricket knowledge is top-notch!";
    }
    else if (percentage<40){
        message+="There's room for improvement, keep going!";

    }
    else{
        message+=message += "Good job!";
    }
    questionElement.innerHTML=message;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}

nextButton.addEventListener("click",()=>{
if(currentQuestionIndex<questions.length){
    handleNextButton();
}
else{
    startQuiz();
}
});
startQuiz();
