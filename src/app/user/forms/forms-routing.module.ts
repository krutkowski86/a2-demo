import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { ZlecComponent } from './zlec/zlec.component';
import { Krok1Component } from './krok1/krok1.component';
import { Krok2Component } from './krok2/krok2.component';
import { ViewResolver } from './zlec/view-resolver.resolve';

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
        path: 'zlec',
        component: ZlecComponent,
        resolve: {
          viewConfig: ViewResolver
        },
        children: [
          {
            path: 'krok1',
            component: Krok1Component
          },
          {
            path: 'krok2',
            component: Krok2Component
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
