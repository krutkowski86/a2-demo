import { NgModule } from '@angular/core';
import {
  NgbButtonsModule,
  NgbCollapseModule,
  NgbTooltipModule,
  NgbModalModule,
  NgbDropdownModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

const boostrapModules = [
  NgbButtonsModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbTooltipModule
];

@NgModule({
  imports: boostrapModules,
  exports: boostrapModules
})
export class NgBootstrapModule {}
