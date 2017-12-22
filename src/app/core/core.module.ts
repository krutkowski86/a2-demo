import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [LoginComponent]
})
export class CoreModule {}
