import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export const markAsTouched = (formGroup: FormGroup | FormArray): void => {
  formGroup.markAsTouched();
  formGroup.updateValueAndValidity();
  Object.values(formGroup.controls).forEach((control: AbstractControl) => {
    if (control.errors) {
      control.markAsTouched();
      control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
    }
    if ((control instanceof FormGroup || control instanceof FormArray) && control.controls) {
      markAsTouched(control);
    }
  });
};
