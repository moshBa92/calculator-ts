import { CalculatorModel } from "./calculator-model/calculator-model.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalculatorService {
  constructor() { }
  private startDisplayValue = 0;
  private startBackStorageValue = null;
  private startOperator = null;

  private calculator = new CalculatorModel(
    this.startDisplayValue,
    this.startBackStorageValue,
    this.startOperator
  );

  get Calculator() {
    return this.calculator;
  }

  getActualyDisplayed = () => {
    const displayedValue = this.calculator.displayValue;
    const backStorageValue = this.calculator.backStorageValue;
    const displayedValueReturn = (parseFloat(displayedValue)).toLocaleString('en', {
      useGrouping: true,
      maximumFractionDigits: 8
    });
    const theValueReturn = (parseFloat(backStorageValue)).toLocaleString('en', {
      useGrouping: true,
      maximumFractionDigits: 8
    });
    if ((displayedValue === 0 && backStorageValue === null)
      ||
      (displayedValue !== 0 && backStorageValue === null)
      ||
      (displayedValue !== 0 && backStorageValue !== null)) {
      return displayedValueReturn;
    }
    else {
      return theValueReturn;
    }
  };

  claerDisplay() {
    this.calculator.displayValue = this.startDisplayValue;
    this.calculator.backStorageValue = this.startBackStorageValue;
    this.calculator.operator = this.startOperator;
  }

  ReverseNumber() {
    const displayValue = parseFloat(this.calculator.displayValue);
    const backStorageValue = (this.calculator.backStorageValue);

    if (displayValue == 0 && backStorageValue === null) {
    }
    else if (displayValue == 0 && backStorageValue !== null) {
      this.calculator.displayValue = backStorageValue * -1;
    }
    else {
      this.calculator.displayValue = displayValue * -1;
    }
  }

  persentegeNumber() {
    const displayValue = parseFloat(this.calculator.displayValue);
    const backStorageValue = parseFloat(this.calculator.backStorageValue);
    const limit = 0.00001;
    if (displayValue != 0 && Math.abs(displayValue) > limit) {

      this.calculator.displayValue = (displayValue) / 100

    }
    else if (displayValue == 0 && Math.abs(backStorageValue) > limit) {
      this.calculator.displayValue = backStorageValue / 100
    }
    else {
      this.calculator.displayValue = 0;
      this.calculator.backStorageValue = 0;
    }
  }

  inputDot(dot: string) {
    const displayValue = this.calculator.displayValue;
    const backStorageValue = this.calculator.backStorageValue;
    const condition = (displayValue != 0 || displayValue == 0 && backStorageValue == null);
    if (condition) {
      if ((String(displayValue)).indexOf('.') === -1) {
        this.calculator.displayValue = (displayValue + '.');
      }
    }
    else {
      if ((String(backStorageValue)).indexOf('.') === -1) {
        this.calculator.displayValue = (backStorageValue + '.');
      }
    }
  }

  inputDigit(digit: number) {
    const displayValue = this.calculator.displayValue + "";
    this.calculator.displayValue =
      ((parseFloat(displayValue) == 0) && (displayValue != '0.'))
        ?
        digit
        :
        displayValue + digit;
  }

  claculate() {
    const operator = this.calculator.operator;
    const displayValue = parseFloat(this.calculator.displayValue);
    const backStorageValue = parseFloat(this.calculator.backStorageValue);
    const displayValueToCalculate = displayValue == 0 ? backStorageValue : displayValue;

    const calculation = () => {
      switch (operator) {
        case '+':
          return backStorageValue + displayValueToCalculate;
        case '-':
          return backStorageValue - displayValueToCalculate;
        case '÷':
          return backStorageValue / displayValueToCalculate;
        case '×':
          return backStorageValue * displayValueToCalculate;
        default:
          return 0;
      }
    };

    let claculationResult: any = calculation();
    
    if (operator != null) {
      this.calculator.backStorageValue = claculationResult;
      this.calculator.displayValue = 0;
      this.calculator.operator = null;
    }
  }

  operatorClculation(nextOperator) {
    const operator = this.calculator.operator;
    const displayedValue = parseFloat(this.calculator.displayValue);
    const backStorageValue = parseFloat(this.calculator.backStorageValue);
    const displayedValueToCalculate = displayedValue == 0 ? backStorageValue : displayedValue;

    const calculation = () => {
      switch (operator) {
        case '+':
          return backStorageValue + displayedValueToCalculate;
        case '-':
          return backStorageValue - displayedValueToCalculate;
        case '÷':
          return backStorageValue / displayedValueToCalculate;
        case '×':
          return backStorageValue * displayedValueToCalculate;
        default:
          return 0;
      }
    };

    this.calculator.backStorageValue = calculation();
    this.calculator.displayValue = 0;
    this.calculator.operator = nextOperator;

  }

  inputOperator(operator: any) {
    const backStorageValue = parseFloat(this.calculator.displayValue);
    this.claculate();

    if (operator !== null && backStorageValue !== 0) {
      this.calculator.displayValue = this.startDisplayValue;
      this.calculator.operator = operator;
      this.Calculator.backStorageValue = backStorageValue;
      ;
    }
    else {
      this.calculator.operator = operator;
    }
  }

  isClaculatorStateIsFull() {
    const condition =
      this.calculator.displayValue != 0
      &&
      this.calculator.backStorageValue != null
      &&
      this.calculator.operator != null
    return condition;
  }

}
