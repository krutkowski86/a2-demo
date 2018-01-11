import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormsService } from '../forms.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-krok1',
  templateUrl: './krok1.component.html',
  styleUrls: ['./krok1.component.scss']
})
export class Krok1Component implements OnInit {
  krok1Form: FormGroup;
  viewConfig;

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _formService: FormsService
  ) {
    this.krok1Form = this._fb.group({});
  }

  ngOnInit() {
    this.viewConfig = this._formService.mapConfigView(
      this._route.snapshot.parent.data['viewConfig']
    );
    console.log(this.viewConfig);
  }

  onSubmit({ value, valid }) {
    console.log(value, valid);
  }
}
