import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [LoginComponent, PageNotFoundComponent]
})
export class CoreModule {}
