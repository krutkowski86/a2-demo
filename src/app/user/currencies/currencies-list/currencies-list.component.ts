import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import orderBy from 'lodash/orderBy';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.scss']
})
export class CurrenciesListComponent implements OnInit {
  currenciesList;
  getCurrencyImage;

  constructor(private _currenciesSrv: CurrenciesService) {}

  ngOnInit() {
    this.currenciesList = orderBy(
      this._currenciesSrv.getCurrencies(),
      ['priority'],
      ['asc']
    );
    this.getCurrencyImage = this._currenciesSrv.getCurrencyImage;
  }
}
