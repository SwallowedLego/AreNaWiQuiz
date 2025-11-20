# AreNaWiQuiz

Ein einfaches Quiz-Website-Template auf Deutsch mit dem deutschen Notensystem (1,0 - 6,0).

## Funktionen

- **Interaktives Quiz**: Fragen werden nacheinander angezeigt
- **Navigation**: Vor- und Zurück-Navigation durch die Fragen
- **Antwortauswahl**: Klickbare Antwortoptionen mit visueller Rückmeldung
- **Deutsches Notensystem**: Bewertung nach dem deutschen Notensystem (1,0 - 6,0)
- **Responsive Design**: Funktioniert auf verschiedenen Bildschirmgrößen
- **Neustart-Funktion**: Quiz kann jederzeit neu gestartet werden

## Notensystem

Das Quiz verwendet das deutsche Notensystem:

- **1,0 (Sehr gut)**: 92-100% - Eine hervorragende Leistung
- **2,0 (Gut)**: 81-91% - Eine Leistung, die über den durchschnittlichen Anforderungen liegt
- **3,0 (Befriedigend)**: 67-80% - Eine Leistung, die durchschnittlichen Anforderungen entspricht
- **4,0 (Ausreichend)**: 50-66% - Eine Leistung, die trotz ihrer Mängel noch den Anforderungen genügt
- **5,0 (Mangelhaft)**: 30-49% - Eine Leistung, die den Anforderungen nicht entspricht
- **6,0 (Ungenügend)**: 0-29% - Eine Leistung, die den Anforderungen nicht entspricht und erhebliche Mängel aufweist

## Verwendung

1. Öffnen Sie `index.html` in einem Webbrowser
2. Beantworten Sie die Fragen nacheinander
3. Am Ende erhalten Sie Ihre Punktzahl und Note
4. Klicken Sie auf "Neu starten", um das Quiz erneut zu beginnen

## Anpassung

### Fragen hinzufügen oder ändern

Bearbeiten Sie die Datei `quiz.js` und ändern Sie das Array `quizQuestions`:

```javascript
const quizQuestions = [
    {
        question: "Ihre Frage hier?",
        answers: [
            "Antwort 1",
            "Antwort 2",
            "Antwort 3",
            "Antwort 4"
        ],
        correct: 0  // Index der korrekten Antwort (0-3)
    },
    // Weitere Fragen...
];
```

### Styling anpassen

Bearbeiten Sie `styles.css`, um Farben, Schriftarten und Layout anzupassen.

## Dateien

- `index.html` - Hauptseite mit HTML-Struktur
- `styles.css` - Styling und Design
- `quiz.js` - Quiz-Logik und Funktionalität