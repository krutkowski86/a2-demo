import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { DaneosoboweComponent } from './daneosobowe/daneosobowe.component';
import { FormsListComponent } from './forms-list/forms-list.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: '',
        component: FormsListComponent
      },
      {
        path: 'daneosobowe',
        component: DaneosoboweComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
