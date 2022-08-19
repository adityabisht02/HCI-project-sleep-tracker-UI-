const quizData = [
    {
        question: "How satisfied were you with today's sleep?",
        a: 5,
        b: 4,
        c: 3,
        d: 2,
        e: 1,
    
    },
    {
        question: "How would you rate your workout routine yesterday?",
        a: 5,
        b: 4,
        c: 3,
        d: 2,
        e: 1,
       
    },
    {
        question: "How would you rate your diet yesterday? Did you have an appropriate diet?",
        a: 5,
        b: 4,
        c: 3,
        d: 2,
        e: 1,
     
    },
    {
        question: "How would you rate your mental condition yesterday?",
        a: 5,
        b: 4,
        c: 3,
        d: 2,
        e: 1,
      
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0


loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
       
        score=score+ Number(answer);

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Your sleep score for today is ${score} </h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})