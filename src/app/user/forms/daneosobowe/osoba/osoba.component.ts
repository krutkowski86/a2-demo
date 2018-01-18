import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';
import { FormsService } from '../../forms.service';

@Component({
  selector: 'app-osoba',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.scss']
})
export class OsobaComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() viewConfig: any;

  constructor(private _formService: FormsService) {}

  ngOnInit() {}

  checkValue(field) {
    console.log(this.parentForm.controls[field].value);
  }

  get adresy(): FormArray {
    return this.parentForm.get('adresy') as FormArray;
  }

  dodajAdres(typAdresy) {
    const adresyControl: FormArray = <FormArray>this.parentForm.controls.adresy;
    console.log(this.viewConfig);
    // const adresK = this.viewConfig.sekcje.adresy[0];
    // const adresFormGroup = new FormGroup({});
    // this._formService.initGroupControls(adresFormGroup, adresK.pola);
    // adresyControl.push(adresFormGroup);
  }

  usunAdres(index) {
    (<FormArray>this.parentForm.get('adresy')).removeAt(index);
  }
}
