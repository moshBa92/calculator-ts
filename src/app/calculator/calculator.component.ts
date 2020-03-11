import { Component, OnInit } from "@angular/core";
import { CalculatorService } from "./calculator-service.service";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {


  constructor(private calculatorService: CalculatorService) { }

  calculator = this.calculatorService.Calculator;

  ngOnInit() { }

  onGetActualyDisplayed() {
    return this.calculatorService.getActualyDisplayed();
  }
}
