import { Component } from '@angular/core';
import { Currency } from '../model/currency';
import { currencies } from '../model/currencies';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.css'],
})
export class CurrencyCalculatorComponent {
  public result: number;
  public amount: number = 100;
  public currency: Currency = {
    code: 'USD',
    conversionRateToUSD: 1
  };
  public currencies: Currency[] = currencies();
  public selecedCurrency: any;

  public newAmount(amount: number): void {
    this.amount = amount;
    this.calculateResult();
  }

  public newCurrency(value): void {
    this.currency = JSON.parse(value);
    this.calculateResult();
  }

  public calculateResult() {
    this.result = this.amount * this.currency.conversionRateToUSD;
  }

}
