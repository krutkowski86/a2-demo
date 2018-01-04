import { NgModule } from '@angular/core';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SharedModule } from '../../shared/shared.module';
import { DaneosoboweComponent } from './daneosobowe/daneosobowe.component';
import { FormsListComponent } from './forms-list/forms-list.component';

@NgModule({
  imports: [SharedModule, FormsRoutingModule],
  declarations: [FormsComponent, DaneosoboweComponent, FormsListComponent]
})
export class FormsModule {}
