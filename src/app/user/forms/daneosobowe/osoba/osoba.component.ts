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

  ngOnInit() {
    if (this.viewConfig.sekcje && this.viewConfig.sekcje.adresy) {
      this.parentForm.addControl('adresy', new FormArray([]));
      const adresyControl: FormArray = <FormArray>this.parentForm.controls
        .adresy;
      const listaAdresow: Array<any> = this.viewConfig.sekcje.adresy;
      listaAdresow.forEach(adres => {
        const adresFormGroup = new FormGroup({});
        this._formService.initGroupControls(adresFormGroup, adres.pola);
        adresyControl.push(adresFormGroup);
      });
    }
  }

  checkValue(field) {
    console.log(this.parentForm.controls[field].value);
  }

  get adresy(): FormArray {
    return this.parentForm.get('adresy') as FormArray;
  }

  dodajAdres() {
    const adresyControl: FormArray = <FormArray>this.parentForm.controls.adresy;
    const adresK = this.viewConfig.sekcje.adresy[0];
    const adresFormGroup = new FormGroup({});
    this._formService.initGroupControls(adresFormGroup, adresK.pola);
    adresyControl.push(adresFormGroup);
  }

  usunAdres(index) {
    (<FormArray>this.parentForm.get('adresy')).removeAt(index);
  }
}
