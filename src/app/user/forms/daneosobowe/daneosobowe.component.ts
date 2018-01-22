import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Adres } from '../adres/adres.config';
import { FormsService } from '../forms.service';
import { Osoba } from './daneosobowe.config';
import { viewClassName } from '@angular/compiler';
import { AbstractControl } from '@angular/forms/src/model';
import filter from 'lodash/filter';
import find from 'lodash/find';

@Component({
  selector: 'app-daneosobowe',
  templateUrl: './daneosobowe.component.html',
  styleUrls: ['./daneosobowe.component.scss']
})
export class DaneosoboweComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() viewConfig: any;
  @Input() parentModel: any;
  indexOsoby = 0;

  constructor(private _fb: FormBuilder, private _formService: FormsService) {}

  ngOnInit() {
    this.parentForm.addControl('osoby', new FormArray([]));
    if (!this.parentModel.osoby) {
      this.parentModel.osoby = [];
    }
    Object.keys(this.viewConfig.types).forEach(osobaTyp => {
      const osoby = filter(this.parentModel.osoby, { rodzajOsoby: osobaTyp });
      if (osoby.length > 0) {
        osoby.forEach(osoba => {
          this.createOsobaForm(osobaTyp, true, osoba);
        });
      } else {
        this.createOsobaForm(osobaTyp);
      }
    });

    this.parentForm.addControl('_sys_czyUbezp', new FormControl());
  }

  // this.parentForm.controls._sys_czyUbezp.valueChanges.subscribe(
  //   fieldValue => {
  //     if (fieldValue) {
  //       const newOsobaFormGroup = new FormGroup({});
  //       this._formService.initGroupControls(
  //         newOsobaFormGroup,
  //         this.viewConfig.pola
  //       );
  //       osobyControl.push(newOsobaFormGroup);
  //     } else {
  //       console.log('usuń ubezp');
  //     }
  //   }
  // );

  get osoby(): FormArray {
    return this.parentForm.get('osoby') as FormArray;
  }

  osobaModel(id: string) {
    return find(this.parentModel.osoby, { sys_id: id });
  }

  removeOsobaForm(index) {
    const osobyArrayControl = this.osoby;
    osobyArrayControl.removeAt(index);
  }

  createOsobaForm(rodzajOsoby: string, forcePush?: boolean, osobaModel?) {
    const osobyArrayControl: FormArray = <FormArray>this.osoby;
    const typeConfig = this.viewConfig.types[rodzajOsoby];
    if (typeConfig.visible || forcePush) {
      if (typeConfig.fields) {
        const osobaFormGroup = new FormGroup({});
        const sysId = this.indexOsoby++;
        osobaFormGroup.addControl('sys_id', new FormControl(sysId));
        this._formService.initGroupControls(osobaFormGroup, typeConfig, osobaModel);
        if (osobaModel) {
          osobaModel = osobaFormGroup.getRawValue();
        } else {
          this.parentModel.osoby.push(osobaFormGroup.getRawValue());
        }

        osobyArrayControl.push(osobaFormGroup);
      }
    }
  }
}
