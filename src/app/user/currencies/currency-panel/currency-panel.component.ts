import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { ActivatedRoute } from '@angular/router';
import { setInterval } from 'timers';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-currency-panel',
  templateUrl: './currency-panel.component.html',
  styleUrls: ['./currency-panel.component.scss']
})
export class CurrencyPanelComponent implements OnInit, OnDestroy {
  currentCurrency: string;
  paramsSub$: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _currenciesSrv: CurrenciesService
  ) {}

  ngOnInit() {
    this.paramsSub$ = this._activatedRoute.params.subscribe(params => {
      this.currentCurrency = params['currency'];
      setTimeout(() => {
        console.log(this.currentCurrency);
      }, 3000);
    });
  }

  ngOnDestroy() {
    this.paramsSub$.unsubscribe();
  }
}
