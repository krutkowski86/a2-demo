import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-currency-panel',
  templateUrl: './currency-panel.component.html',
  styleUrls: ['./currency-panel.component.scss']
})
export class CurrencyPanelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
