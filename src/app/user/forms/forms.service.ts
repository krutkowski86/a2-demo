import { Injectable } from '@angular/core';
import { Validators, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormsService {
  constructor() {}

  initGroupControls(formGroup: FormGroup, config, model: {} = {}) {
    // console.log(model);
    if (config.fields) {
      const fields = config.fields;
      Object.keys(fields)
        .map(field => Object.assign({}, { key: field }, fields[field]))
        .forEach(field => {
          const fieldValue = model[field.key] || field.init;
          let control: FormControl;
          if (field.disabled) {
            control = new FormControl({
              value: fieldValue || '',
              disabled: true
            });
          } else {
            control = new FormControl(fieldValue || '', {
              validators: this.fieldValidators(field.validators),
              updateOn: 'blur'
            });
          }
          formGroup.addControl(field.key, control);
        });
    }
  }

  setModel(data: any, name: string): void {
    localStorage.setItem(name, JSON.stringify(data));
  }

  getModel(name: string): any {
    return JSON.parse(localStorage.getItem(name));
  }

  private mapField(field) {
    if (field.type === 'array') {
      return new FormArray([]);
    } else {
      return this.formControl(field);
    }
  }

  private formControl(field) {
    return [{ value: field.init, disabled: false }, this.fieldValidators(field.validators)];
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
