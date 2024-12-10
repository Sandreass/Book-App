
# 📚 Book-App
Willkommen zur Book-App! Diese Anwendung bietet eine einfache Möglichkeit, Bücher zu durchsuchen, Details zu einzelnen Büchern anzuzeigen und sie zur Leseliste hinzuzufügen. Die Book-App ist mit modernen Web-Technologien entwickelt und bietet eine benutzerfreundliche Oberfläche für alle Bücherliebhaber.

![App Screenshot](./screenshots/screenshot1.png)

---
## Funktionen

- **Bücher durchsuchen**: Durchsuchen Sie eine Vielzahl von Büchern nach Titel, Autor oder Genre..
- **Leseliste**: Fügen Sie interessante Bücher Ihrer Leseliste hinzu und verwalten Sie sie.
- **Responsive Design**: Optimiert für alle Geräte, damit Sie unterwegs problemlos Bücher finden können..
- **Moderne Technologie**: Entwickelt mit React, Bootstrap und Vite für eine schnelle und effiziente Benutzererfahrung.

[Visit the Book-App](https://book-app-use-context.vercel.app/)

---
## Installation


1. Repository clonen:
    ```sh
    git@github.com:Sandreass/Book-App.git
    ```
2. In das Projektverzeichnis wechseln:
    ```sh
    cd book-app
    ```
3. Abhängigkeiten installieren:
    ```sh
    npm install
    ```
4. .env Datei mit eigene KEY erstellen:
   ```env
    Füge deinen API-Schlüssel hinzu
    ```
5. Entwicklungsserver starten:
    ```sh
    npm run dev
    ```
---
## Technologien

- **React**: Eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.
- **React Bootstrap**: Eine Bibliothek mit React-Komponenten für das Bootstrap Framework.
- **Vite**: Ein schnelleres Frontend-Build-Tool im Vergleich zu traditionellen Bundlern.
- **Bootstrap**: Ein beliebtes CSS-Framework für das Design und Layout von Webseiten.
- **OMDb API**: Eine API zum Abrufen von Bücher, die für die Suche nach Bücher verwendet wird.
- **LocalStorage**: Zur Speicherung der Favoritenliste lokal im Browser.

---
## Projektstruktur

```plaintext
project-root/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── BookDetails.jsx
│   │   ├── BookSearch.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── BookToRead.jsx
│   │   └── Home.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── BooksContex.jsx
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.json
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```
---



