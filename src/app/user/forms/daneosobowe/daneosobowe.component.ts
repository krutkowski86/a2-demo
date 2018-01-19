import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Adres } from '../adres/adres.config';
import { FormsService } from '../forms.service';
import { DaneosoboweFormModel } from './daneosobowe.config';
import { viewClassName } from '@angular/compiler';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-daneosobowe',
  templateUrl: './daneosobowe.component.html',
  styleUrls: ['./daneosobowe.component.scss']
})
export class DaneosoboweComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() viewConfig: any;
  indexOsoby = 0;

  constructor(private _fb: FormBuilder, private _formService: FormsService) {}

  ngOnInit() {
    this.parentForm.addControl('osoby', new FormArray([]));
    Object.keys(this.viewConfig.types).forEach(osobaTyp => {
      this.createOsobaForm(osobaTyp);
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

  removeOsobaForm(index) {
    const osobyArrayControl = this.osoby;
    osobyArrayControl.removeAt(index);
  }

  createOsobaForm(rodzajOsoby: string, forcePush?: boolean) {
    const osobyArrayControl: FormArray = <FormArray>this.osoby;
    const typeConfig = this.viewConfig.types[rodzajOsoby];
    if (typeConfig.visible || forcePush) {
      if (typeConfig.fields) {
        const osobaFormGroup = new FormGroup({});
        osobaFormGroup.addControl('sys_id', new FormControl(this.indexOsoby++));
        this._formService.initGroupControls(osobaFormGroup, typeConfig);
        osobyArrayControl.push(osobaFormGroup);
      }
    }
  }
}
