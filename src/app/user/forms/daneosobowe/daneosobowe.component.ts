import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      'osoby.zub.adresy.s.ulica': [null, [Validators.required]],
      'osoby.zub.adresy.s.nrDomu': [null, [Validators.required]],
      'osoby.zub.adresy.s.nrMieszkania': [null, [Validators.required]],
      'osoby.zub.adresy.s.kodPocztowy': [null, [Validators.required]],
      'osoby.zub.adresy.s.miasto': [null, [Validators.required]]
    });
  }

  onSubmit({ value, valid }) {
    console.log(value, valid);
  }
}
