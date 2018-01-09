import { NgModule } from '@angular/core';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SharedModule } from '../../shared/shared.module';
import { DaneosoboweComponent } from './daneosobowe/daneosobowe.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { AdresComponent } from './adres/adres.component';
import { FormsService } from './forms.service';

@NgModule({
  imports: [SharedModule, FormsRoutingModule],
  declarations: [
    FormsComponent,
    DaneosoboweComponent,
    FormsListComponent,
    AdresComponent
  ],
  providers: [FormsService]
})
export class FormsModule {}
