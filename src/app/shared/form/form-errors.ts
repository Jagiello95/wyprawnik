import { InjectionToken } from '@angular/core';
import { FormErrorsType } from '@shared/form/form-errors.type';

export const defaultErrors: FormErrorsType = {
  required: () => 'shared.form.validator.required',
  minlength: () => 'shared.form.validator.minLength',
  maxlength: () => 'shared.form.validator.maxLength',
  email: () => 'shared.form.validator.email',
  password: () => 'shared.form.validator.password',
  passwordMatch: () => 'shared.form.validator.passwordMatch',
};

export const FORM_ERRORS = new InjectionToken<FormErrorsType>('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
