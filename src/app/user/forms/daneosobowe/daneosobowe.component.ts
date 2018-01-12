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

@Component({
  selector: 'app-daneosobowe',
  templateUrl: './daneosobowe.component.html',
  styleUrls: ['./daneosobowe.component.scss']
})
export class DaneosoboweComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() viewConfig: any;

  constructor(private _fb: FormBuilder, private _formService: FormsService) {
    // this.daneosobowe = this._fb.group({});
    //   typ: [null, [Validators.required]],
    //   imie: [null, [Validators.required]],
    //   imie2: [null, [Validators.required]],
    //   nazwisko: [null, [Validators.required]],
    //   pesel: [null, [Validators.required]],
    //   dataOtrzymaniaPrawaJazdy: [null, [Validators.required]],
    //   telefon: [null, [Validators.required]],
    //   email: [null, [Validators.required]],
    // adresy: this._fb.array([])
    // });
    // const listaAdresow: Adres[] = [new Adres('K'), new Adres('S')];C
    // console.log(listaAdresow);
    // this.setAdresy(listaAdresow);
    // this.onAdresyChange();
  }

  ngOnInit() {
    console.log(this.viewConfig);
    this.parentForm.addControl('osoby', new FormArray([]));

    const osobyControl: FormArray = <FormArray>this.parentForm.controls.osoby;
    const osobaFormGroup = new FormGroup({});
    this._formService.initGroupControls(osobaFormGroup, this.viewConfig.pola);
    osobyControl.push(osobaFormGroup);

    this.parentForm.addControl('_sys_czyUbezp', new FormControl());
  }

  disableField(field: FormControl) {
    field.disable();
  }

  // private setAdresy(adresy: Adres[]) {
  //   const adresyFGs = adresy.map(adres => this._fb.group(adres));
  //   const adresyFormArray = this._fb.array(adresyFGs);
  //   this.daneosobowe.setControl('adresy', adresyFormArray);
  // }

  get osoby(): FormArray {
    return this.parentForm.get('osoby') as FormArray;
  }

  // private onAdresyChange() {
  //   const adresyControl = this.daneosobowe.get('adresy');
  //   adresyControl.valueChanges.forEach(value => console.log(value));
  // }
}
