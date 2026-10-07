# Password Strength Checker

A simple web app that tells you how strong a password is as you type. Built with plain HTML, CSS and JavaScript, no frameworks and no libraries.

**Live demo:** _add your GitHub Pages link here after deploying_

<!-- Add a screenshot: save it as screenshot.png in this folder, then uncomment the line below -->
<!-- ![Screenshot](screenshot.png) -->

## Features

- Live strength meter (Weak, Fair, Good, Strong)
- Checklist for length, lowercase, uppercase, numbers and symbols
- Warns about very common passwords (like `password` or `123456`)
- Warns about repeated characters (like `aaaa`)
- Show / hide password button
- Runs fully in your browser. Your password is never sent or stored anywhere.

## How to run

1. Download or clone this repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/password-strength-checker.git
   ```
2. Open the folder and double-click `index.html`.

No installation or build step needed.

## How it works

1. Each time you type, `script.js` runs a few checks on the password (length, character types).
2. Every passed check adds a point. Common passwords are capped at "Weak".
3. The total is converted to a level, which controls the colour and width of the meter.

## Project structure

```
password-strength-checker/
├── index.html   # Page structure
├── style.css    # Styling
├── script.js    # Strength logic
└── README.md
```

## What I learned

- Handling DOM events (`input`, `click`) in JavaScript
- Using regular expressions to test strings
- Updating the page dynamically from code
- Basic password security ideas (length and variety matter, common passwords are risky)

## Ideas for improvement

- Check against a larger list of leaked passwords
- Estimate how long it would take to crack the password
- Add a "generate strong password" button
- Support dark mode

## Note

This tool is for learning and gives only a rough estimate. For real accounts, use a password manager and enable two-factor authentication.

## License

MIT
