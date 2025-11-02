import { percent, toggleSign } from "../utils/math-operations.js";

class Calculator {
  constructor() {
    this.currentValue = "0";
    this.previousValue = null;
    this.operation = null;
    this.waitingForNewValue = false;
    this.error = false;
  }

  inputNumber(number) {
    if (this.error) return;
    if (this.waitingForNewValue || this.currentValue === "0") {
      this.currentValue = number;
      this.waitingForNewValue = false;
    } else {
      this.currentValue += number;
    }
  }

  inputOperation(nextOperation) {
    if (this.operation && !this.waitingForNewValue) {
      this.calculate();
    }

    this.operation = nextOperation;
    this.previousValue = this.currentValue;
    this.waitingForNewValue = true;
  }

  calculate() {
    if (!this.operation || this.error) return;

    if (this.waitingForNewValue) {
      this.operation = null;
      this.previousValue = null;
      this.waitingForNewValue = false;
      return;
    }

    const prevStr = this.previousValue?.replace(/\s+/g, "").replace(",", ".");
    const currentStr = this.currentValue.replace(/\s+/g, "").replace(",", ".");

    if (!prevStr) return;

    const isPrevInteger = !this.previousValue.includes(",");
    const isCurrentInteger = !this.currentValue.includes(",");

    try {
      let result;

      if (this.operation === "÷") {
        const prev = parseFloat(prevStr);
        const current = parseFloat(currentStr);

        if (current === 0) {
          this.currentValue = "На 0 делить нельзя";
          this.error = true;
          return;
        }

        result = prev / current;
        this.currentValue = result
          .toString()
          .replace(".", ",")
          .replace(/(,\d*?)0+$/, "$1")
          .replace(/,$/, "");
      } else if (isPrevInteger && isCurrentInteger) {
        const prev = BigInt(prevStr);
        const current = BigInt(currentStr);

        switch (this.operation) {
          case "+":
            result = prev + current;
            break;
          case "-":
            result = prev - current;
            break;
          case "x":
            result = prev * current;
            break;
          default:
            return;
        }

        this.currentValue = result.toString();
      } else {
        const prev = parseFloat(prevStr);
        const current = parseFloat(currentStr);

        switch (this.operation) {
          case "+":
            result = prev + current;
            break;
          case "-":
            result = prev - current;
            break;
          case "x":
            result = prev * current;
            break;
          default:
            return;
        }

        const formatted = result
          .toString()
          .replace(".", ",")
          .replace(/(,\d*?)0+$/, "$1")
          .replace(/,$/, "");

        this.currentValue = formatted;
      }

      this.operation = null;
      this.previousValue = null;
      this.waitingForNewValue = true;
    } catch (e) {
      console.error("Ошибка вычисления:", e);
      this.currentValue = "Ошибка";
      this.error = true;
    }
  }

  clear() {
    this.currentValue = "0";
    this.previousValue = null;
    this.operation = null;
    this.error = false;
  }

  getDisplay() {
    return this.currentValue;
  }

  applyPercent() {
    if (this.error) return;
    const current = parseFloat(this.currentValue.replace(",", "."));
    const result = percent(current);
    this.currentValue = result.toString().replace(".", ",");
  }

  toggleSign() {
    if (this.error) return;

    const current = parseFloat(this.currentValue.replace(",", "."));
    const result = toggleSign(current);
    this.currentValue = result.toString().replace(".", ",");

    if (this.waitingForNewValue) {
      this.operation = null;
      this.previousValue = null;
      this.waitingForNewValue = false;
    }
  }
}

export default Calculator;
