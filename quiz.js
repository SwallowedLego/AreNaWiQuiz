// Quiz Fragen - Beispiel Fragen (kann erweitert werden)
const quizQuestions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: [
            "Berlin",
            "München",
            "Hamburg",
            "Frankfurt"
        ],
        correct: 0
    },
    {
        question: "Welches ist das größte Bundesland Deutschlands?",
        answers: [
            "Nordrhein-Westfalen",
            "Bayern",
            "Baden-Württemberg",
            "Niedersachsen"
        ],
        correct: 1
    },
    {
        question: "In welchem Jahr fiel die Berliner Mauer?",
        answers: [
            "1987",
            "1988",
            "1989",
            "1990"
        ],
        correct: 2
    },
    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: [
            "14",
            "15",
            "16",
            "17"
        ],
        correct: 2
    },
    {
        question: "Welcher Fluss fließt durch Berlin?",
        answers: [
            "Die Elbe",
            "Die Spree",
            "Der Rhein",
            "Die Donau"
        ],
        correct: 1
    },
    {
        question: "Was bedeutet 'Guten Tag' auf Englisch?",
        answers: [
            "Good Night",
            "Good Morning",
            "Good Day",
            "Good Evening"
        ],
        correct: 2
    },
    {
        question: "Welche Farben hat die deutsche Flagge?",
        answers: [
            "Rot, Weiß, Blau",
            "Schwarz, Rot, Gold",
            "Grün, Weiß, Rot",
            "Blau, Weiß, Rot"
        ],
        correct: 1
    },
    {
        question: "Wer schrieb 'Faust'?",
        answers: [
            "Friedrich Schiller",
            "Johann Wolfgang von Goethe",
            "Heinrich Heine",
            "Thomas Mann"
        ],
        correct: 1
    },
    {
        question: "Welches ist das höchste Gebirge in Deutschland?",
        answers: [
            "Der Schwarzwald",
            "Das Erzgebirge",
            "Die Alpen",
            "Der Harz"
        ],
        correct: 2
    },
    {
        question: "In welcher Stadt steht der Kölner Dom?",
        answers: [
            "Düsseldorf",
            "Bonn",
            "Köln",
            "Aachen"
        ],
        correct: 2
    }
];

// Quiz Zustand
let currentQuestion = 0;
let userAnswers = [];
let score = 0;

// DOM Elemente
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionCounter = document.getElementById('question-counter');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const gradeElement = document.getElementById('grade');
const gradeDescription = document.getElementById('grade-description');
const restartBtn = document.getElementById('restart-btn');

// Quiz initialisieren
function initQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    score = 0;
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    displayQuestion();
}

// Frage anzeigen
function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    questionText.textContent = question.question;
    
    // Antworten erstellen
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        
        // Wenn bereits eine Antwort ausgewählt wurde, markieren
        if (userAnswers[currentQuestion] === index) {
            button.classList.add('selected');
        }
        
        answersContainer.appendChild(button);
    });
    
    // Navigation aktualisieren
    updateNavigation();
}

// Antwort auswählen
function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    
    // Alle Buttons aktualisieren
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        btn.classList.remove('selected');
        if (index === answerIndex) {
            btn.classList.add('selected');
        }
    });
    
    // Weiter-Button aktivieren
    nextBtn.disabled = false;
}

// Navigation aktualisieren
function updateNavigation() {
    questionCounter.textContent = `Frage ${currentQuestion + 1} von ${quizQuestions.length}`;
    prevBtn.disabled = currentQuestion === 0;
    
    // Prüfen ob eine Antwort ausgewählt wurde
    if (userAnswers[currentQuestion] !== null) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
    
    // Text des Weiter-Buttons ändern bei letzter Frage
    if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.textContent = 'Ergebnis anzeigen';
    } else {
        nextBtn.textContent = 'Weiter';
    }
}

// Zur nächsten Frage
function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
}

// Zur vorherigen Frage
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Ergebnisse anzeigen
function showResults() {
    // Punktzahl berechnen
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
            score++;
        }
    });
    
    const percentage = (score / quizQuestions.length) * 100;
    const grade = calculateGermanGrade(percentage);
    
    // Ergebnisse anzeigen
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    scoreElement.textContent = `${score} von ${quizQuestions.length} (${percentage.toFixed(1)}%)`;
    gradeElement.textContent = grade.grade;
    gradeDescription.innerHTML = `<strong>${grade.description}</strong><br>${grade.comment}`;
}

// Deutsche Notenskala berechnen (1,0 - 6,0)
function calculateGermanGrade(percentage) {
    let grade, description, comment;
    
    if (percentage >= 92) {
        grade = '1,0';
        description = 'Sehr gut';
        comment = 'Eine hervorragende Leistung!';
    } else if (percentage >= 81) {
        grade = '2,0';
        description = 'Gut';
        comment = 'Eine Leistung, die über den durchschnittlichen Anforderungen liegt.';
    } else if (percentage >= 67) {
        grade = '3,0';
        description = 'Befriedigend';
        comment = 'Eine Leistung, die durchschnittlichen Anforderungen entspricht.';
    } else if (percentage >= 50) {
        grade = '4,0';
        description = 'Ausreichend';
        comment = 'Eine Leistung, die trotz ihrer Mängel noch den Anforderungen genügt.';
    } else if (percentage >= 30) {
        grade = '5,0';
        description = 'Mangelhaft';
        comment = 'Eine Leistung, die den Anforderungen nicht entspricht.';
    } else {
        grade = '6,0';
        description = 'Ungenügend';
        comment = 'Eine Leistung, die den Anforderungen nicht entspricht und erhebliche Mängel aufweist.';
    }
    
    return { grade, description, comment };
}

// Event Listeners
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
restartBtn.addEventListener('click', initQuiz);

// Quiz beim Laden der Seite starten
initQuiz();
