import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

interface ADRES {
  typ: string;
  ulica: string;
  nrDomu: string;
  nrMieszkania: string;
  kodPocztowy: string;
  miasto: string;
}

@Component({
  selector: 'app-daneosobowe',
  templateUrl: './daneosobowe.component.html',
  styleUrls: ['./daneosobowe.component.scss']
})
export class DaneosoboweComponent implements OnInit {
  daneosobowe: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.daneosobowe = this._fb.group({
      'osoby.zub.typ': [null, [Validators.required]],
      'osoby.zub.imie': [null, [Validators.required]],
      'osoby.zub.imie2': [null, [Validators.required]],
      'osoby.zub.nazwisko': [null, [Validators.required]],
      'osoby.zub.pesel': [null, [Validators.required]],
      'osoby.zub.dataOtrzymaniaPrawaJazdy': [null, [Validators.required]],
      'osoby.zub.telefon': [null, [Validators.required]],
      'osoby.zub.email': [null, [Validators.required]],
      adresy: this._fb.array([])

      // this._fb.group({
      //   ulica: [null, [Validators.required]],
      //   nrDomu: [null, [Validators.required]],
      //   nrMieszkania: [null, [Validators.required]],
      //   kodPocztowy: [null, [Validators.required]],
      //   miasto: [null, [Validators.required]]
      // })
    });

    const listaAdresow: ADRES[] = [
      {
        typ: 'K',
        kodPocztowy: '',
        ulica: '',
        nrDomu: '',
        nrMieszkania: '',
        miasto: ''
      },
      {
        typ: 'S',
        kodPocztowy: '',
        ulica: '',
        nrDomu: '',
        nrMieszkania: '',
        miasto: ''
      }
    ];

    this.setAdresy(listaAdresow);
    this.onAdresyChange();
  }

  private setAdresy(adresy: ADRES[]) {
    const adresyFGs = adresy.map(adres => this._fb.group(adres));
    const adresyFormArray = this._fb.array(adresyFGs);
    this.daneosobowe.setControl('adresy', adresyFormArray);
  }

  onSubmit({ value, valid }) {
    console.log(value, valid);
  }

  get adresy(): FormArray {
    return this.daneosobowe.get('adresy') as FormArray;
  }

  private onAdresyChange() {
    const adresyControl = this.daneosobowe.get('adresy');
    adresyControl.valueChanges.forEach(value => console.log(value));
  }
}
