import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

let nextUniqueId = 0;

@Directive({
  selector: 'input[appInput], textarea[appInput], p-inputNumber[appInput], p-inputMask[appInput]',
  exportAs: 'appInput',
})
export class InputDirective implements OnInit, OnChanges, OnDestroy {
  public readonly stateChanges: Subject<void> = new Subject<void>();
  public focused = false;

  @Input() public labelTrans: string | null = null;
  @Input() public placeholder!: string;
  protected _inputValueAccessor: { value: string | null };
  protected _uid = `app-input-${nextUniqueId++}`;
  protected _disabled = false;
  protected _id!: string;
  protected _type = 'text';

  private _readonly = false;
  public blurred = false;

  constructor(
    protected _elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    @Optional() @Self() public ngControl: NgControl,
  ) {
    this._inputValueAccessor = this._elementRef.nativeElement;
  }

  @HostBinding('class.p-inputtext')
  public get isFormControl(): boolean {
    // return this._elementRef.nativeElement instanceof HTMLInputElement
    //     || this._elementRef.nativeElement instanceof HTMLSelectElement
    //     || this._elementRef.nativeElement instanceof HTMLTextAreaElement;
    return true;
  }

  @HostBinding('attr.required')
  public get required(): boolean {
    return this.isRequired;
  }

  @HostBinding('class.is-required')
  public get classRequired(): boolean {
    return this.isRequired;
  }

  @HostBinding('class.is-valid')
  public get classValid(): boolean {
    return this.isValid;
  }

  @HostBinding('class.is-pristine')
  public get classPRistine(): boolean {
    return this.isPristine;
  }

  @HostBinding('class.is-touched')
  public get classTouched(): boolean {
    return this.isTouched;
  }
  

  @HostBinding('attr.readonly')
  public get attributeReadonly(): string | null {
    return this.readonly ? 'readonly' : null;
  }

  public get isRequired(): boolean {
    const control = this.ngControl.control;
    if (control && control.validator) {
      const validator = control.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  }

  public get isValid(): boolean {
    const control = this.ngControl.control;
    if (control) {
      if (control.valid) {
        return true;
      }
    }
    return false;
  }

  public get isPristine(): boolean {
    const control = this.ngControl.control;
    if (control) {
      if (control.pristine) {
        return true;
      }
    }
    return false;
  }

  public get isTouched(): boolean {
    const control = this.ngControl.control;
    if (control) {
      if (control.touched) {
        return true;
      }
    }
    return false;
  }

  public get empty(): boolean {
    return !this.ngControl.value;
  }

  @Input()
  public get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }

  public set disabled(value: boolean) {
    this._disabled = value;

    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }

  @Input()
  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value || this._uid;
  }

  @Input()
  public get type(): string {
    return this._type;
  }

  public set type(value: string) {
    this._type = value;
  }

  @Input()
  public get value(): string | null {
    return this._inputValueAccessor.value;
  }

  public set value(value: string | null) {
    const parsedValue = value === '' ? null : value;
    if (parsedValue !== this.value) {
      this._inputValueAccessor.value = value;
      this.stateChanges.next();
    }
  }

  @Input()
  public get readonly(): boolean {
    return this._readonly;
  }

  public set readonly(value: boolean) {
    this._readonly = value;
  }

  @HostListener('focus', ['$event.target'])
  public onFocus(_: FocusEvent): void {
    this._focusChanged(true);
  }

  @HostListener('blur', ['$event.target'])
  public onBlur(_: Event): void {
    this.blurred = true;
    this._focusChanged(false);
  }

  public ngOnInit(): void {
    this.stateChanges.next();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.stateChanges.next();
  }

  public ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  public _focusChanged(isFocused: boolean): void {
    if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }

  public clear(): void {
    this._inputValueAccessor.value = null;
    this.stateChanges.next();
  }
}
