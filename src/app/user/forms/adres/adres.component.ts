import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-adres-form',
  templateUrl: './adres.component.html',
  styleUrls: ['./adres.component.scss']
})
export class AdresComponent implements OnInit {
  @Input() parentForm: FormGroup;

  ngOnInit() {
    this.parentForm.addControl('adresy', new FormArray([]));
  }

  // get adresy(): FormArray {
  //   return this.parentForm.get('adresy') as FormArray;
  // }

  private setAdresy(adresy) {
    const adresyFGs = adresy.map(adres => new FormGroup(adres));
    const adresyFormArray = new FormArray(adresyFGs);
    this.parentForm.setControl('adresy', adresyFormArray);
  }

  private onAdresyChange() {
    const adresyControl = this.parentForm.get('adresy');
    adresyControl.valueChanges.forEach(value => console.log(value));
  }
}
