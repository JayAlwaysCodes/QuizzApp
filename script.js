const quizData = [
    {
        question: 'How Old is Nigeria?',
        a :"50",
        b : '24',
        c: '60',
        d: '70',
        correct: 'c'
    },
    {
        question: 'What is The most used programming language in 2019? ',
        a:'Java',
        b: 'JavaScript',
        c:'C++',
        d:'Pyhton',
        correct: 'b'
    },
    {
        question: 'How long did the Nigeria Biafra war lasted?',
        a: '2',
        b:'7',
        c:'3',
        d:'10',
        correct: 'c'

    },
    {
        question:'Who is the current president of America?',
        a: 'Jeff Bezoz',
        b:'David Mark',
        c:'Joe Biden',
        d:'Donald Trump',
        correct: 'c',
    },
    {
        question:'How old is the Nigerian Flag?',
        a:'21',
        b: '60',
        c:'61',
        d: '50',
        correct: 'b'
    }

]
const answerEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];


    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    

    



    
}

function getSelected(){
  
   
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){

            answer= answerEl.id;

        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked =false;
    });
}
submitBtn.addEventListener('click', ()=>{
    //check to see the answer

    const answer = getSelected();
    console.log(answer)
    if (answer ){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        
        if( currentQuiz<quizData.length){
               loadQuiz();
       }else{
               quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} questions</h2> <button onclick='location.reload()'>Reload</button>`
       }
   
       }
    }

   
   

    
)