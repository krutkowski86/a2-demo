import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormsService } from '../forms.service';
import { ActivatedRoute } from '@angular/router';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import find from 'lodash/find';
import mergeWith from 'lodash/mergeWith';

@Component({
  selector: 'app-krok1',
  templateUrl: './krok1.component.html',
  styleUrls: ['./krok1.component.scss']
})
export class Krok1Component implements OnInit {
  krok1Form: FormGroup;
  viewConfig;
  submitted = false;
  model = {};

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

    this.krok1Form.valueChanges.forEach(formModel => {
      console.log(formModel);
    });
  }

  onSubmit({ value, valid }) {
    if (valid) {
      this.model = mergeWith(this.model, this.krok1Form.getRawValue(), this.mergeCustomizer);
    }
  }

  get rawValue() {
    return this.krok1Form.getRawValue();
  }

  private mergeCustomizer = (objValue, srcValue) => {
    if (isArray(objValue)) {
      if (isPlainObject(objValue[0]) || isPlainObject(srcValue[0])) {
        return srcValue.map(src => {
          const obj = find(objValue, { sys_id: src.sys_id });
          return mergeWith(obj || {}, src, this.mergeCustomizer);
        });
      }
      return srcValue;
    }
  };
}
