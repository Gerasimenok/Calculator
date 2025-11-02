import "./styles/calculator.css";
import "./styles/theme.css";
import Calculator from "./components/calculator.js";

const calculator = new Calculator();

const display = document.getElementById("display");
const displayText = document.getElementById("display-text");
const buttons = document.querySelectorAll(".button");
const themeButton = document.getElementById("theme-toggle");

function updateDisplay() {
  displayText.textContent = calculator.getDisplay();
  display.scrollLeft = display.scrollWidth;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    switch (true) {
      case button.classList.contains("dark") && button.id !== "decimal":
        calculator.inputNumber(buttonValue);
        break;
      case button.id === "decimal":
        if (!calculator.getDisplay().includes(",")) {
          calculator.inputNumber(",");
        }
        break;
      case button.id === "clear":
        calculator.clear();
        break;
      case buttonValue === "=":
        calculator.calculate();
        break;
      case button.classList.contains("orange") && buttonValue !== "=":
        calculator.inputOperation(buttonValue);
        break;
      case button.id === "percent":
        calculator.applyPercent();
        break;
      case button.id === "toggleSign":
        calculator.toggleSign();
        break;
    }

    updateDisplay();
  });
});

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeButton.textContent = isDark ? "☀️" : "🌙";
});
