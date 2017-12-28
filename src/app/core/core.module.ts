import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [LoginComponent, UserComponent, PageNotFoundComponent]
})
export class CoreModule {}
