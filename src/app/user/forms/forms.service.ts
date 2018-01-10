import { Injectable } from '@angular/core';
import { Validators, FormArray, FormControl } from '@angular/forms';

@Injectable()
export class FormsService {
  constructor() {}

  initGroupControls(fields) {
    const group = {};
    Object.keys(fields)
      .map(field => {
        return Object.assign({}, { key: field }, fields[field]);
      })
      .forEach(field => {
        const formField = this.mapField(field);
        group[field.key] = formField;
      });

    return group;
  }

  private mapField(field) {
    if (field.type === 'array') {
      return new FormArray([]);
    } else {
      return this.formControl(field);
    }
  }

  private formControl(field) {
    return [
      { value: field.init, disabled: false },
      this.fieldValidators(field.validators)
    ];
  }

  private fieldValidators(validators: { key; value? }[] = []) {
    const outputValidators = [];

    validators.forEach(validator => {
      switch (validator.key) {
        case 'required': {
          outputValidators.push(Validators.required);
          break;
        }
        case 'minLength': {
          outputValidators.push(Validators.minLength(validator.value));
        }
      }
    });

    return outputValidators;
  }
}
