import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Host,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewContainerRef,
} from '@angular/core';
import { AbstractControl, FormArray, FormGroup, NgControl, ValidationErrors } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ControlErrorComponent } from '@shared/form/control-error.component';
import { ControlErrorsContainerDirective } from '@shared/form/control-errors-container.directive';
import { FORM_ERRORS } from '@shared/form/form-errors';
import { FormErrorKey, FormErrorsFunction, FormErrorsType } from '@shared/form/form-errors.type';
import { FormSubmitDirective } from '@shared/form/form-submit.directive';
import { EMPTY, merge, Observable } from 'rxjs';

// @UntilDestroy()
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
  public ref: ComponentRef<ControlErrorComponent> | null = null;
  public container: ViewContainerRef;
  public submit$: Observable<Event>;
  @Input() public customErrors = {};
  @Input() public formControlName = '';

  constructor(
    private readonly vcr: ViewContainerRef,
    private readonly host: ElementRef<HTMLFormElement>,
    private readonly resolver: ComponentFactoryResolver,
    @Optional() formErrorsContainer: ControlErrorsContainerDirective,
    @Inject(FORM_ERRORS) private readonly errors: FormErrorsType,
    @Optional() @Host() private readonly form: FormSubmitDirective,
    private readonly controlDir: NgControl,
    private readonly translateService: TranslocoService,
  ) {
    this.container = formErrorsContainer ? formErrorsContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  public get control(): AbstractControl {
    // tslint:disable-next-line:no-non-null-assertion
    return this.controlDir.control!;
  }

  public get element(): HTMLFormElement {
    return this.host.nativeElement;
  }

  @HostListener('focus', ['$event'])
  public onClick(): void {
    if (this.form) {
      this.markAsTouched(this.form.formGroup);
    }
  }

  public ngOnInit(): void {
    merge(this.submit$, this.control.valueChanges, this.control.statusChanges)
      // .pipe(untilDestroyed(this))
      .subscribe(() => {
        const controlErrors: ValidationErrors | null = this.control.errors;
        console.log(this.control)
        if (controlErrors && (this.control.touched || this.control.value )) {
          this.assignTranslatedError(controlErrors);
        } else if (this.ref) {
          this.setError();
        } else {
          this.control.markAsTouched();
        }
      });
  }

  public ngOnDestroy(): void {}

  private assignTranslatedError(controlErrors: ValidationErrors): void {
    this.control.markAsTouched();
    const firstKey = Object.keys(controlErrors)[0] as FormErrorKey;
    const errorByKey = this.errors[firstKey];
    const translatedText = this.getTranslatedError(firstKey, errorByKey, controlErrors[firstKey]);
    this.setError(translatedText);
  }

  // tslint:disable-next-line:no-any
  private getTranslatedError(key: FormErrorKey, errorByKey: FormErrorsFunction, controlError: any): string {
    switch (key) {
      case FormErrorKey.min:
        return this.translateService.translate(errorByKey(controlError), { value: controlError.min });
      case FormErrorKey.max:
        return this.translateService.translate(errorByKey(controlError), { value: controlError.max });
      case FormErrorKey.minlength:
        return this.translateService.translate(errorByKey(controlError), { value: controlError.requiredLength });
      case FormErrorKey.maxlength:
        return this.translateService.translate(errorByKey(controlError), { value: controlError.requiredLength });
      default:
        if (this.translateService.translate(errorByKey(controlError)) === '') {
          return controlError;
        }
        return this.translateService.translate(errorByKey(controlError));
    }
  }

  private setError(text: string = ''): void {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
    if (text) {
      this.element.classList.add('is-invalid');
    } else {
      this.element.classList.remove('is-invalid');
    }
  }

  private markAsTouched(formGroup: FormGroup | FormArray): void {
    Object.entries(formGroup.controls).some(([key, value]: [string, AbstractControl | FormGroup]): boolean => {
      if (value instanceof FormGroup || (value instanceof FormArray && value.controls)) {
        this.markAsTouched(value);
      }
      if (key === this.formControlName) {
        value.markAsTouched();
        return true;
      }
      return false;
    });
  }
}
