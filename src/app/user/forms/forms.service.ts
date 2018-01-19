import { Injectable } from '@angular/core';
import { Validators, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormsService {
  constructor() {}

  mapConfigView(view) {
    return view;
  }

  initGroupControls(formGroup: FormGroup, config) {
    if (config.fields) {
      const fields = config.fields;
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
  }

  initArrayGroupsAndControls(formArray: FormArray, config) {
    Object.keys(config.types).forEach((type, index) => {
      const typeConfig = config.types[type];
      const typeFormGroup = new FormGroup({});
      typeFormGroup.addControl('sys_id', new FormControl(index));
      this.initGroupControls(typeFormGroup, typeConfig);
      formArray.push(typeFormGroup);
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
