// Quiz Fragen - Bau des Auges und Funktion der Bestandteile
const quizQuestions = [
    {
        question: "Welche Struktur des Auges ist für die Brechung des Lichts hauptverantwortlich?",
        answers: [
            "Die Hornhaut (Cornea)",
            "Die Iris",
            "Die Pupille",
            "Die Netzhaut (Retina)"
        ],
        correct: 0
    },
    {
        question: "Was ist die Hauptfunktion der Linse im Auge?",
        answers: [
            "Schutz des Auges vor Staub",
            "Anpassung der Lichtmenge",
            "Feinabstimmung der Brechkraft für scharfes Sehen",
            "Umwandlung von Licht in elektrische Signale"
        ],
        correct: 2
    },
    {
        question: "Welche Struktur enthält die Lichtsinneszellen (Stäbchen und Zapfen)?",
        answers: [
            "Die Lederhaut (Sklera)",
            "Die Netzhaut (Retina)",
            "Die Aderhaut (Choroidea)",
            "Der Glaskörper"
        ],
        correct: 1
    },
    {
        question: "Was ist die Funktion der Iris?",
        answers: [
            "Schutz vor mechanischen Verletzungen",
            "Regelung der Lichtmenge durch Veränderung der Pupillengröße",
            "Scharfstellen von nahen und fernen Objekten",
            "Ernährung der Netzhaut mit Sauerstoff"
        ],
        correct: 1
    },
    {
        question: "Welche Zellen in der Netzhaut sind für das Farbsehen verantwortlich?",
        answers: [
            "Stäbchen",
            "Zapfen",
            "Ganglienzellen",
            "Sinneszellen"
        ],
        correct: 1
    },
    {
        question: "Was ist der blinde Fleck?",
        answers: [
            "Ein Bereich auf der Hornhaut ohne Durchsichtigkeit",
            "Der Punkt, wo die Linse am dicksten ist",
            "Die Stelle, wo der Sehnerv austritt und keine Sinneszellen vorhanden sind",
            "Der dunkle Bereich in der Mitte der Pupille"
        ],
        correct: 2
    },
    {
        question: "Welche Funktion hat der Glaskörper?",
        answers: [
            "Er filtert schädliche UV-Strahlen",
            "Er gibt dem Auge seine Form und hält die Netzhaut an ihrem Platz",
            "Er produziert Tränenflüssigkeit",
            "Er leitet elektrische Signale zum Gehirn"
        ],
        correct: 1
    },
    {
        question: "Welche Muskeln verändern die Form der Linse beim Sehen?",
        answers: [
            "Die äußeren Augenmuskeln",
            "Die Iris-Muskeln",
            "Die Ziliarmuskeln",
            "Die Lider-Muskeln"
        ],
        correct: 2
    },
    {
        question: "Was ist die Funktion der Lederhaut (Sklera)?",
        answers: [
            "Sie gibt dem Auge Farbe",
            "Sie schützt das Auge mechanisch und gibt ihm seine stabile Form",
            "Sie nimmt Lichtstrahlen auf",
            "Sie versorgt die Hornhaut mit Nährstoffen"
        ],
        correct: 1
    },
    {
        question: "Was passiert mit der Pupille bei starker Helligkeit?",
        answers: [
            "Sie weitet sich (Mydriasis)",
            "Sie verengt sich (Miosis)",
            "Sie bleibt unverändert",
            "Sie verschließt sich vollständig"
        ],
        correct: 1
    },
    {
        question: "Welche Zellen sind für das Sehen bei Dunkelheit besonders wichtig?",
        answers: [
            "Zapfen",
            "Stäbchen",
            "Ganglienzellen",
            "Bipolarzellen"
        ],
        correct: 1
    },
    {
        question: "Was ist die Hauptfunktion der Hornhaut (Cornea)?",
        answers: [
            "Sie schützt das Auge und bricht das einfallende Licht",
            "Sie reguliert die Lichtmenge",
            "Sie wandelt Licht in Nervenimpulse um",
            "Sie gibt dem Auge seine Farbe"
        ],
        correct: 0
    },
    {
        question: "Wo im Auge entsteht das schärfste Bild?",
        answers: [
            "Auf der gesamten Netzhaut gleichmäßig",
            "Im blinden Fleck",
            "In der Fovea centralis (Sehgrube, gelber Fleck)",
            "Am Rand der Netzhaut"
        ],
        correct: 2
    },
    {
        question: "Welche Struktur versorgt die Netzhaut mit Nährstoffen und Sauerstoff?",
        answers: [
            "Die Lederhaut (Sklera)",
            "Die Hornhaut (Cornea)",
            "Die Aderhaut (Choroidea)",
            "Der Glaskörper"
        ],
        correct: 2
    },
    {
        question: "Was ist Akkommodation?",
        answers: [
            "Die Anpassung der Pupillengröße an die Helligkeit",
            "Die Anpassung der Linsenform für scharfes Sehen in verschiedenen Entfernungen",
            "Die Bewegung der Augen beim Lesen",
            "Die Produktion von Tränenflüssigkeit"
        ],
        correct: 1
    },
    {
        question: "Welcher Nerv leitet die visuellen Informationen vom Auge zum Gehirn?",
        answers: [
            "Der Hörnerv",
            "Der Riechnerv",
            "Der Sehnerv (Nervus opticus)",
            "Der Gesichtsnerv"
        ],
        correct: 2
    },
    {
        question: "Was ist die korrekte Reihenfolge der Lichtdurchdringung im Auge?",
        answers: [
            "Hornhaut → Linse → Glaskörper → Netzhaut",
            "Linse → Hornhaut → Netzhaut → Glaskörper",
            "Hornhaut → Glaskörper → Linse → Netzhaut",
            "Pupille → Linse → Hornhaut → Netzhaut"
        ],
        correct: 0
    },
    {
        question: "Wie viele Zapfen-Typen gibt es normalerweise beim Menschen für das Farbsehen?",
        answers: [
            "Zwei verschiedene Typen",
            "Drei verschiedene Typen",
            "Vier verschiedene Typen",
            "Fünf verschiedene Typen"
        ],
        correct: 1
    },
    {
        question: "Was ist Kurzsichtigkeit (Myopie)?",
        answers: [
            "Das Bild wird hinter der Netzhaut scharf",
            "Das Bild wird vor der Netzhaut scharf",
            "Die Linse ist zu flach",
            "Die Pupille ist zu klein"
        ],
        correct: 1
    },
    {
        question: "Welche Aussage über die äußeren Augenmuskeln ist richtig?",
        answers: [
            "Sie verändern die Form der Linse",
            "Sie öffnen und schließen das Augenlid",
            "Sie bewegen den Augapfel in verschiedene Richtungen",
            "Sie regulieren die Pupillengröße"
        ],
        correct: 2
    },
    {
        question: "Was enthält die vordere Augenkammer?",
        answers: [
            "Glaskörper",
            "Kammerwasser",
            "Tränenflüssigkeit",
            "Blut"
        ],
        correct: 1
    },
    {
        question: "Welche Struktur trennt die vordere von der hinteren Augenkammer?",
        answers: [
            "Die Hornhaut",
            "Die Linse und Iris",
            "Die Netzhaut",
            "Die Lederhaut"
        ],
        correct: 1
    },
    {
        question: "Was ist die Hauptfunktion der Tränenflüssigkeit?",
        answers: [
            "Lichtbrechung",
            "Befeuchtung, Reinigung und Schutz der Hornhaut",
            "Ernährung der Linse",
            "Regelung des Augeninnendrucks"
        ],
        correct: 1
    },
    {
        question: "Welche Farbe hat die Iris typischerweise?",
        answers: [
            "Immer braun",
            "Immer blau",
            "Sie kann verschiedene Farben haben (braun, grün, blau, etc.)",
            "Immer schwarz"
        ],
        correct: 2
    },
    {
        question: "Was bedeutet der Begriff 'Adaptation' im Zusammenhang mit dem Auge?",
        answers: [
            "Die Bewegung des Auges",
            "Die Anpassung der Sehfähigkeit an unterschiedliche Lichtverhältnisse",
            "Die Formveränderung der Linse",
            "Die Produktion von Tränen"
        ],
        correct: 1
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
