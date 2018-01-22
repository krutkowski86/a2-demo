import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { FormsService } from '../../forms.service';
import has from 'lodash/has';
import filter from 'lodash/filter';

@Component({
  selector: 'app-osoba',
  templateUrl: './osoba.component.html',
  styleUrls: ['./osoba.component.scss']
})
export class OsobaComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() viewConfig: any;
  @Input() osobaModel: any;
  indexAdresy = 0;

  constructor(private _formService: FormsService) {}

  ngOnInit() {
    console.log(this.osobaModel);
    console.log(this.viewConfig);

    if (has(this.viewConfig, 'sections.adresy')) {
      this.parentForm.addControl('adresy', new FormArray([]));
      if (!this.osobaModel.adresy) {
        this.osobaModel.adresy = [];
      }
      Object.keys(this.viewConfig.sections.adresy.types).forEach(adresTyp => {
        const adresy = filter(this.osobaModel.adresy, { typ: adresTyp });
        if (adresy.length > 0) {
          adresy.forEach(adres => {
            this.createAdresForm(adresTyp, this.osobaModel.adresy, adres);
          });
        } else {
          this.createAdresForm(adresTyp, this.osobaModel.adresy);
        }
      });
    }
  }

  get adresy(): FormArray {
    return this.parentForm.get('adresy') as FormArray;
  }

  removeAdresForm(index) {
    const osobyArrayControl = this.adresy;
    osobyArrayControl.removeAt(index);
  }

  createAdresForm(typAdresu: string, string, forcePush?: boolean, adresModel?) {
    const adresyArrayControl = <FormArray>this.adresy;
    const typeConfig = this.viewConfig.sections.adresy.types[typAdresu];
    if (typeConfig.visible) {
      if (typeConfig.fields) {
        const adresFormGroup = new FormGroup({});
        const sysId = this.indexAdresy++;
        adresFormGroup.addControl('sys_id', new FormControl(sysId));
        this._formService.initGroupControls(adresFormGroup, typeConfig, adresModel);
        if (adresModel) {
          adresModel = adresFormGroup.getRawValue();
        } else {
          this.osobaModel.adresy.push(adresFormGroup.getRawValue());
        }
        adresyArrayControl.push(adresFormGroup);
      }
    }
  }
}
