export type FormErrorsFunction = (value?: string) => string;
export type FormErrorsType = Record<string, FormErrorsFunction>;

export enum FormErrorKey {
  min = 'min',
  max = 'max',
  minlength = 'minlength',
  maxlength = 'maxlength'
}
