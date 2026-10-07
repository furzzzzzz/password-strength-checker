// A small list of very common passwords. You can grow this list later.
const COMMON_PASSWORDS = [
  "password", "123456", "12345678", "123456789", "qwerty", "abc123",
  "111111", "letmein", "welcome", "admin", "iloveyou", "monkey",
  "dragon", "football", "password1", "passw0rd", "qwerty123"
];

// Grab elements from the page
const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("toggle");
const meterBar = document.getElementById("meter-bar");
const strengthLabel = document.getElementById("strength-label");
const warning = document.getElementById("warning");

const rules = {
  length: document.getElementById("rule-length"),
  lower: document.getElementById("rule-lower"),
  upper: document.getElementById("rule-upper"),
  number: document.getElementById("rule-number"),
  symbol: document.getElementById("rule-symbol"),
};

// Check each rule and return true/false results
function checkRules(password) {
  return {
    length: password.length >= 12,
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  };
}

// Turn the rule results into a score from 0 to 4
function calculateScore(password, results) {
  if (password.length === 0) return 0;

  // Common passwords are always weak
  if (COMMON_PASSWORDS.includes(password.toLowerCase())) return 1;

  let points = Object.values(results).filter(Boolean).length; // 0 to 5

  // Very short passwords cannot score high
  if (password.length < 8) points = Math.min(points, 2);

  if (points <= 2) return 1; // Weak
  if (points === 3) return 2; // Fair
  if (points === 4) return 3; // Good
  return 4; // Strong
}

const LEVELS = [
  { label: "Start typing...", color: "#e2e8f0", width: "0%" },
  { label: "Weak", color: "#ef4444", width: "25%" },
  { label: "Fair", color: "#f59e0b", width: "50%" },
  { label: "Good", color: "#3b82f6", width: "75%" },
  { label: "Strong", color: "#22c55e", width: "100%" },
];

// Update everything the user sees
function updateDisplay() {
  const password = passwordInput.value;
  const results = checkRules(password);
  const score = calculateScore(password, results);
  const level = LEVELS[score];

  meterBar.style.width = level.width;
  meterBar.style.backgroundColor = level.color;
  strengthLabel.textContent = level.label;

  for (const name in rules) {
    rules[name].classList.toggle("passed", results[name]);
  }

  if (COMMON_PASSWORDS.includes(password.toLowerCase())) {
    warning.textContent = "This is a very common password. Attackers try these first.";
  } else if (/(.)\1{2,}/.test(password)) {
    warning.textContent = "Avoid repeating the same character many times (like aaa).";
  } else {
    warning.textContent = "";
  }
}

// Show / hide the password
toggleButton.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleButton.textContent = isHidden ? "Hide" : "Show";
});

// Run the check every time the user types
passwordInput.addEventListener("input", updateDisplay);

updateDisplay();
