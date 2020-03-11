import { CalculatorService } from "./../calculator/calculator-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"]
})
export class ButtonsComponent implements OnInit {
  constructor(private calculatorService: CalculatorService) { }

  public actualyDisplayed;
  opratorCalculationCondition =
    (this.calculatorService.Calculator.displayValue != 0 &&
      this.calculatorService.Calculator.backStorageValue != null &&
      this.calculatorService.Calculator != null);


  ngOnInit() { }

  getActualyDisplayed() {
    this.actualyDisplayed = this.calculatorService.getActualyDisplayed();
    if(this.actualyDisplayed == 0 ){
      return true; 
    }
    return false;
  }

  onClearDispaly() {
    this.calculatorService.claerDisplay();
  }

  onReverseNumber() {
    this.calculatorService.ReverseNumber();
  }

  onPersentegeNumber() {
    this.calculatorService.persentegeNumber();
  }

  onInputDigit(number: number) {
    this.calculatorService.inputDigit(number);
  }

  onInputDot() {
    const dot = '.';
    this.calculatorService.inputDot(dot);
  }

  onCalculate() {
    this.calculatorService.claculate();
  }

  onOperatorOption(operator: string) {
    const opratorCalculationCondition = this.calculatorService.isClaculatorStateIsFull();
    console.log(opratorCalculationCondition);
    if (!opratorCalculationCondition) {
      console.log('input operator');
      this.calculatorService.inputOperator(operator);
    }
    else {
      console.log('operator claculation');
      this.calculatorService.operatorClculation(operator);
    }
  }
}
