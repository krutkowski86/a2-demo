import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';

@Injectable()
export class FormsService {
  constructor(private _fb: FormBuilder) {}
  mapGroupFields(fields) {
    const group = {};
    Object.keys(fields)
      .map(field => {
        return Object.assign({}, { key: field }, fields[field]);
      })
      .forEach(field => {
        const formField = this.mapField(field);
        if (formField) {
          group[field.key] = formField;
        }
      });

    return group;
  }

  private mapField(field) {
    if (field.type === 'array') {
      return new FormArray(this.mapGroupFields(field.group));
    } else {
      return [field.init, this.mapValidators(field.validators)];
    }
  }

  private mapValidators(validators: { key; value? }[] = []) {
    const formValidators = [];

    validators.forEach(validator => {
      switch (validator.key) {
        case 'required': {
          formValidators.push(Validators.required);
          break;
        }
        case 'minLength': {
          formValidators.push(Validators.minLength(validator.value));
        }
      }
    });

    return formValidators;
  }
}
