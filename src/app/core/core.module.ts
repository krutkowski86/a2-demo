import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: []
})
export class CoreModule {}