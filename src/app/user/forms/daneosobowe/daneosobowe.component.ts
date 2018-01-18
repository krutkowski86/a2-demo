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
import maxBy from 'lodash/maxBy';
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
  indexAdresu = 0;

  constructor(private _fb: FormBuilder, private _formService: FormsService) {}

  ngOnInit() {
    console.log(this.viewConfig);
    this.parentForm.addControl('osoby', new FormArray([]));

    const osobyControl: FormArray = <FormArray>this.parentForm.controls.osoby;

    Object.keys(this.viewConfig.types).forEach((osobaTyp, osobaIndex) => {
      const typeConfig = this.viewConfig.types[osobaTyp];
      if (!typeConfig.hide) {
        if (typeConfig.fields) {
          const osobaFormGroup = new FormGroup({});
          osobaFormGroup.addControl('sys_id', new FormControl(osobaIndex));
          this._formService.initGroupControls(osobaFormGroup, typeConfig);
          if (typeConfig.sections && typeConfig.sections.adresy) {
            osobaFormGroup.addControl('adresy', new FormArray([]));
            const adresyControl = <FormArray>osobaFormGroup.controls.adresy;
            this._formService.initArrayGroups(
              adresyControl,
              typeConfig.sections.adresy
            );
          }
          osobyControl.push(osobaFormGroup);
          this.indexOsoby = osobaIndex;
        }
      }
    });

    // this.parentForm.addControl('adresy', new FormArray([]));
    //   const adresyControl: FormArray = <FormArray>this.parentForm.controls
    //     .adresy;
    //   const listaAdresow: Array<any> = this.viewConfig.sekcje.adresy;
    //   listaAdresow.forEach(adres => {
    //     const adresFormGroup = new FormGroup({});
    //     this._formService.initGroupControls(adresFormGroup, adres.pola);
    //     adresyControl.push(adresFormGroup);
    //   });
    // const osobaFormGroup = new FormGroup({});
    // this._formService.initGroupControls(osobaFormGroup, this.viewConfig.pola);
    // osobyControl.push(osobaFormGroup);

    this.parentForm.addControl('_sys_czyUbezp', new FormControl());

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
  }

  get osoby(): FormArray {
    return this.parentForm.get('osoby') as FormArray;
  }

  dodajOsobe(rodzajOsoby: string) {
    const osobyControl: FormArray = <FormArray>this.parentForm.controls.osoby;
    const osobaFormGroup = new FormGroup({});
    const typeConfig = this.viewConfig.types[rodzajOsoby];
    osobaFormGroup.addControl('sys_id', new FormControl(++this.indexOsoby));

    this._formService.initGroupControls(osobaFormGroup, typeConfig);
    if (typeConfig.sections && typeConfig.sections.adresy) {
      osobaFormGroup.addControl('adresy', new FormArray([]));
    }
    osobyControl.push(osobaFormGroup);
  }

  usunOsobe(index) {
    const osobyControl: FormArray = <FormArray>this.parentForm.controls.osoby;
    osobyControl.removeAt(index);
  }
}
