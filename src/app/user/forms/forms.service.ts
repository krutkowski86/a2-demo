import { Injectable } from '@angular/core';
import { Validators, FormArray, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';

@Injectable()
export class FormsService {
  constructor() {}

  mapConfigView(view) {
    return view;
  }

  initGroupControls(formGroup: FormGroup, fields) {
    Object.keys(fields)
      .map(field => Object.assign({}, { key: field }, fields[field]))
      .forEach(field => {
        let control: FormControl;
        if (field.disabled) {
          control = new FormControl({
            value: field.init || '',
            disabled: true
          });
        } else {
          control = new FormControl(field.init || '', {
            validators: this.fieldValidators(field.validators),
            updateOn: 'blur'
          });
        }
        formGroup.addControl(field.key, control);
      });
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
