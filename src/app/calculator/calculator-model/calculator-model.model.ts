export class CalculatorModel {
  public displayValue: any;
  public backStorageValue: any;
  public operator: any;

  constructor(displayValue: any, backStorageValue: any, operator: any) {
    this.displayValue = displayValue;
    this.backStorageValue = backStorageValue;
    this.operator = operator;
  }
}
