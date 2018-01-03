import { NgModule } from '@angular/core';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule, FormsRoutingModule],
  declarations: [FormsComponent]
})
export class FormsModule {}
