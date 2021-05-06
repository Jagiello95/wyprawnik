import { AbstractControl, FormControl, ValidationErrors, Validators as BaseValidators } from '@angular/forms';

export class Validators extends BaseValidators {
  public static passwordValidator(control: FormControl): ValidationErrors | null {
    const pattern = /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.\/?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,256}/g;
    if (control.value) {
      return (control.value as string).match(pattern) ? null : { password: true };
    }
    return null;
  }

  public static phoneNumberValidator(control: FormControl): ValidationErrors | null {
    const pattern = /^\+?[0-9\-().\/]{8,20}.*/;
    if (control.value) {
      return (control.value as string).match(pattern) ? null : { phoneNumber: true };
    }
    return null;
  }

  public static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('first');
    const confirmPassword = control.get('second');
    const isPasswordValid = password && password.valid;
    const isConfirmPasswordValid = (confirmPassword?.value === password?.value);
    if (isPasswordValid && !isConfirmPasswordValid) {
      const errors = {...confirmPassword?.errors, passwordMatch: true};
      confirmPassword?.setErrors(errors);
    }
    return null;
  }
}
