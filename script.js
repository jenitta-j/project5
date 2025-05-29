const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Transfer Machine Language", "Hyper Tool Markup Language", "Home Tool Mark Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheet", "Computer Style System", "Creative Style System", "Control Style Sheet"],
    answer: "Cascading Style Sheet"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("scoreText");

function loadQuestion() {
  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => {
      if (option === current.answer) {
        score++;
      }
      nextBtn.disabled = false;
    };
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreText.textContent = `Your score: ${score} out of ${quizData.length}`;
}

// Initial load
loadQuestion();
