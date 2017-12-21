import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatMenuModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSelectModule,
  MatToolbarModule,
  MatListModule,
  MatDialogModule,
  MatDatepickerModule,
  MatRadioModule,
  MatTableModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatSortModule,
  MatFormFieldModule
} from '@angular/material';

const MaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatMenuModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSelectModule,
  MatToolbarModule,
  MatListModule,
  MatDialogModule,
  MatDatepickerModule,
  MatRadioModule,
  MatTableModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatSortModule,
  MatFormFieldModule
];

@NgModule({
  imports: MaterialModules,
  exports: MaterialModules
})
export class MaterialDesignModule {}
