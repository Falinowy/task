import { Component, Input } from '@angular/core';
import { Currency } from '../model/currency';
import { currencies } from '../model/currencies';
@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css'],
})
export class CurrencySelectorComponent {
  @Input() currencies: Currency[] = currencies();
  public selecedCurrency: any;

  onSelect(value) {
  this.selecedCurrency = JSON.parse(value);
}
}
