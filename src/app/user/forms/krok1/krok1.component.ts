import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormsService } from '../forms.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

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
    // console.log(this.viewConfig);
    this.krok1Form.valueChanges.forEach(formModel => {
      console.log(formModel);
    });
  }

  onSubmit({ value, valid }) {
    if (valid) {
      this.model = _.mergeWith(
        this.model,
        this.krok1Form.getRawValue(),
        this.mergeCustomizer
      );
    }
  }

  private mergeCustomizer = (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      if (_.isPlainObject(objValue[0]) || _.isPlainObject(srcValue[0])) {
        return srcValue.map(src => {
          const obj = _.find(objValue, { id: src.typ });
          return _.mergeWith(obj || {}, src, this.mergeCustomizer);
        });
      }
      return srcValue;
    }
  };
}
