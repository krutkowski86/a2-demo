import { NgModule } from '@angular/core';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SharedModule } from '../../shared/shared.module';
import { DaneosoboweComponent } from './daneosobowe/daneosobowe.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { AdresComponent } from './adres/adres.component';
import { FormsService } from './forms.service';
import { ZlecComponent } from './zlec/zlec.component';
import { Krok1Component } from './krok1/krok1.component';
import { Krok2Component } from './krok2/krok2.component';
import { ViewResolver } from './zlec/view-resolver.resolve';

@NgModule({
  imports: [SharedModule, FormsRoutingModule],
  declarations: [
    FormsComponent,
    DaneosoboweComponent,
    FormsListComponent,
    AdresComponent,
    ZlecComponent,
    Krok1Component,
    Krok2Component
  ],
  providers: [FormsService, ViewResolver]
})
export class FormsModule {}
