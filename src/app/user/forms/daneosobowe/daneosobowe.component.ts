import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { Adres } from '../adres/adres.config';
import { FormsService } from '../forms.service';
import { DaneosoboweFormModel } from './daneosobowe.config';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-daneosobowe',
  templateUrl: './daneosobowe.component.html',
  styleUrls: ['./daneosobowe.component.scss']
})
export class DaneosoboweComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() viewConfig: any;

  constructor(private _fb: FormBuilder, private _formService: FormsService) {}

  ngOnInit() {
    console.log(this.viewConfig);
    this.parentForm.addControl('osoby', new FormArray([]));

    const osobyControl: FormArray = <FormArray>this.parentForm.controls.osoby;
    const osobaFormGroup = new FormGroup({});
    this._formService.initGroupControls(osobaFormGroup, this.viewConfig.pola);
    osobyControl.push(osobaFormGroup);

    this.parentForm.addControl('_sys_czyUbezp', new FormControl());

    this.parentForm.controls._sys_czyUbezp.valueChanges.subscribe(
      fieldValue => {
        if (fieldValue) {
          const newOsobaFormGroup = new FormGroup({});
          this._formService.initGroupControls(
            newOsobaFormGroup,
            this.viewConfig.pola
          );
          osobyControl.push(newOsobaFormGroup);
        } else {
          console.log('usuń ubezp');
        }
      }
    );
  }

  get osoby(): FormArray {
    return this.parentForm.get('osoby') as FormArray;
  }
}
