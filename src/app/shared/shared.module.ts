import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapModule } from './modules/ng-bootstrap/ng-bootstrap.module';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

const providers = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapModule,
    SearchFilterPipe
  ],
  declarations: [SearchFilterPipe]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: providers
    };
  }
}
