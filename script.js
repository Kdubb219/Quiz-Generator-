var signUpButton = document.querySelector("#sign-up");

var questions=[
    "What is an Array?",
    "How do I declare a variable in JavaScript?",
    'What is a Stack?',
];
var correctAnswer=[
    'commonly referred to as a collection of items stored at contiguous memory locations',
    'using var',
    'a stack refers to a linear data structure performing operations in a last in first order',
]
var answers=[
    ['commonly referred to as a collection of items stored at contiguous memory locations', 'using functions', 'using var', 'using var'],
    ['using an array', 'using var', 'using a function', 'for, then statements'],
    ['items stored are of the same type', 'organizes data so that a related set of values can easily sor', 'a stack refers to a linear data structure performing operations in a last in first order', 'using var'],
];
var idx=0;
var score= [];
var timer=75;
var time;


function StartQuiz() {
    var button=document.querySelector("#startbutton");
    button.style.display='none';

    NextQuestion(); 
    StartTime();

}
function StartTime(){
   time= setInterval(oneTick,1000);
}
function oneTick(){
    document.querySelector('#spnTimer').innerHTML= timer--;
}

function MakeAnswerList(answers) {
    var html="<ul class='answers'>";
    for(var ans in answers){
        html += "<li class='ansli' onclick='SelectAnswer(this)'>" + answers[ans] + "</li>";
    }
    html += "</ul>";
    return html;
}
function SelectAnswer(answer){
   if(answer.innerHTML==correctAnswer[idx-1]){
    score.push(1);
    document.querySelector('#result').innerHTML='Correct';
   } else{score.push(0);
   document.querySelector('#result').innerHTML='Incorrect';}
   
    NextQuestion();
}

function NextQuestion(){
    if (idx <questions.length){
    document.querySelector("#question").innerHTML=questions[idx];
    document.querySelector("#answer").innerHTML=MakeAnswerList(answers[idx]);
    idx++;
    } else{
        CompleteQuiz();
    }
    
    
}

function CompleteQuiz(){
    var sum=0;
    var finalScore=0;
    for (var s in score){
        sum += score[s];
        finalScore=Math.floor((sum/score.length) * 100);
        localStorage.setItem("score", finalScore);
    }
    
    
    document.querySelector('#finalScore').innerHTML= sum.toString()+' of '+ score.length.toString()+'; '+finalScore.toString()+ '%';
    
    document.querySelector('.quiz').style.display= 'none';
    document.querySelector('.finalresult').style.display= 'block';
    clearInterval(time);
}

function SubmitInitials(){
    var initialsValue = document.getElementById('initials').value.trim();
    localStorage.setItem("initials", initialsValue);
    document.querySelector('.finalresult').style.display= 'none';
    document.querySelector('.highscore').style.display= 'block';
    ShowHighscore();
}

function ShowHighscore(){
    console.log(localStorage.getItem('initials'));
    document.querySelector('.score').innerHTML=localStorage.getItem('initials')+'...'
    + localStorage.getItem('score');
}
