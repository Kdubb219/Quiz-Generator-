var questions=[
    "What is an Array?",
    "How do I declare a variable in JavaScript?",
    'What is a Stack?',
];
var correctAnswer=[
    'answer 1',
    'using var',
    'a stack refers to a linear data structure performing operations in a last in first order',
]
var answers=[
    ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    ['using an array', 'using var', 'using a function', 'for, then statements'],
    ['answer 100', 'answer 200', 'a stack refers to a linear data structure performing operations in a last in first order', 'answer 400'],
];
var idx=0;
var score= []


function StartQuiz() {
    var button=document.querySelector("#startbutton");
    button.style.display='none';

    NextQuestion();

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

function initial(){

}

function CompleteQuiz(){
    var sum=0;
    var finalScore=0;
    for (var s in score){
        sum += score[s];
        finalScore=Math.floor((sum/score.length) * 100);
        localStorage.setItem("score", finalScore);
    }
    finalScore=Math.floor((sum/score.length) * 100);
    document.querySelector('#finalScore').innerHTML= sum.toString()+' of '+ score.length.toString()+'; '+finalScore.toString()+ '%';

    document.querySelector('.quiz').style.display= 'none';
    document.querySelector('.finalresult').style.display= 'block';

}