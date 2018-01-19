import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { FormsService } from '../../forms.service';
import has from 'lodash/has';

@Component({
  selector: 'app-osoba',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.scss']
})
export class OsobaComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() viewConfig: any;
  indexAdresy = 0;

  constructor(private _formService: FormsService) {}

  ngOnInit() {
    console.log(this.viewConfig);
    console.log(this.parentForm);
    if (has(this.viewConfig, 'sections.adresy')) {
      this.parentForm.addControl('adresy', new FormArray([]));
      Object.keys(this.viewConfig.sections.adresy.types).forEach(adresTyp => {
        this.createAdresForm(adresTyp);
      });
    }
  }

  // if (typeConfig.sections && typeConfig.sections.adresy) {
  //   osobaFormGroup.addControl('adresy', new FormArray([]));
  //   const adresyArrayControl = <FormArray>osobaFormGroup.controls.adresy;
  //   this._formService.initArrayGroupsAndControls(
  //     adresyArrayControl,
  //     typeConfig.sections.adresy
  //   );
  // }

  get adresy(): FormArray {
    return this.parentForm.get('adresy') as FormArray;
  }

  removeAdresForm(index) {
    const osobyArrayControl = this.adresy;
    osobyArrayControl.removeAt(index);
  }

  createAdresForm(typAdresu: string, forcePush?: boolean) {
    const adresyArrayControl: FormArray = <FormArray>this.adresy;
    const typeConfig = this.viewConfig.sections.adresy.types[typAdresu];
    console.log(typeConfig);
    if (typeConfig.visible || forcePush) {
      if (typeConfig.fields) {
        const adresFormGroup = new FormGroup({});
        adresFormGroup.addControl('sys_id', new FormControl(this.indexAdresy++));
        this._formService.initGroupControls(adresFormGroup, typeConfig);
        adresyArrayControl.push(adresFormGroup);
      }
    }
  }
}
