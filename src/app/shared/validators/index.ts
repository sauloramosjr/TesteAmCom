import { AbstractControl, ValidationErrors } from '@angular/forms';
import { isValidCPF } from '../utils';

export const CustomValidators = {
  cpf: function (control: AbstractControl): ValidationErrors | null {
    if (!isValidCPF(control.value)) {
      return { cpf: true };
    }
    return null;
  },
};
