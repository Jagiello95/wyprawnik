import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { InputDirective } from '@shared/input/input.directive';
import { InputComponent } from '@shared/input/input/input.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

type controlType = InputDirective

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  // tslint:disable-next-line:use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @Input() public icon: string | null = null;
  @Input() public hint: string | null = null;
  @Input() public labelText: string | null = null;
  @Input() public hasPlaceholder = false;
  @Input() public toggleIcon = false;
  @Output() public toggleEvent = new EventEmitter<string>();
  public hintText: string | null = null;

  @ContentChild(InputDirective) public _controlNonStatic!: InputDirective;
  @ContentChild(InputDirective, { static: true }) public _controlStatic!: InputDirective;
  @ContentChild(InputComponent) public _input!: InputComponent;

  private readonly _destroyed = new Subject<void>();

  private _label: string | null = null;

  private _required!: boolean;
  private _blurred: boolean = false;

  private _readonly!: boolean;

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly translateService: TranslocoService,
  ) {
  }

  private static isInputControl(obj: controlType): obj is InputDirective {
    return obj instanceof InputDirective;
  }


  public set blurred(blurred: boolean) {
    this._blurred = blurred;
  }

  public get blurred(): boolean {
    return this._blurred;
  }

  @Input()
  public set label(label: string | null) {
    this._label = label;
  }

  public get label(): string | null {
    return this._label;
  }

  public get required(): boolean {
    return this._required;
  }


  public get valid(): boolean | null {
    const control = this._control;
    if (FormGroupComponent.isInputControl(control) && control.ngControl) {
      return control.ngControl.valid;
    }
    else {
      return false;
    }

  }

  @Input()
  public set required(value: boolean) {
    this._required = value;
  }

  public get readonly(): boolean {
    return this._readonly;
  }

  @Input()
  public set readonly(value: boolean) {
    this._readonly = value;
  }

  public get _control(): controlType {
    return (
        this._controlNonStatic ||
        this._controlStatic ||
        this._input
    );
  }

  public get normalizeIcon(): string {
    return `pi-${this.icon}`;
  }

  @HostListener('blur', ['$event'])
  onBlur() {
    this.blurred = true
  }


  @HostBinding('class.is-focused')
  public get classFocused(): boolean {
    if (this._control && FormGroupComponent.isInputControl(this._control)) {
      return this._control.focused;
    }
    return false;
  }

  @HostBinding('class.is-filled')
  public get classFilled(): boolean {
      if (this._control && FormGroupComponent.isInputControl(this._control)) {
        return !this._control.empty;
      }
    return true;
  }

  @HostBinding('class.is-required')
  public get classRequired(): boolean {
    return this.required;
  }

  // @HostBinding('class.is-blurred')
  // public get classBlurred(): boolean {
  //   return this.blurred;
  // }

  @HostBinding('class.is-readonly')
  public get isReadonly(): boolean {
    return this._readonly;
  }

  @HostBinding('class.is-blurred')
  public get classBlurred(): boolean {
    if (this._control && FormGroupComponent.isInputControl(this._control)) {
      return this._control.blurred;
    }
  return true;
  }

  @HostBinding('class.is-touched')
  public get classTouched(): boolean {
    if (this._control && FormGroupComponent.isInputControl(this._control)) {
      return this._control.isTouched;
    }
    return false;
  }

  @HostBinding('attr.is-valid')
  public get isValid(): boolean {
    return this.valid ? this.valid : false;
  }

  
  @HostBinding('class.is-valid')
  public get classValid(): boolean {
    return this.valid ? this.valid : false;
  }


  public ngOnInit(): void {
    if (this.hint !== null) {
      this.translateService.selectTranslate(this.hint).subscribe((el: string) => (this.hintText = el));
    }

    if (this.label !== null) {
      this.translateService.selectTranslate(this.label).subscribe((el: string) => (this.labelText = el));
    }
  }

  public ngAfterViewInit(): void {
    this._changeDetectorRef.detectChanges();
  }

  public ngAfterContentInit(): void {
    const control = this._control;

    if (control) {

      if (FormGroupComponent.isInputControl(control)) {
        control.stateChanges.subscribe(() => {
          this._changeDetectorRef.markForCheck();
        });
      }

      if (FormGroupComponent.isInputControl(control) && control.ngControl && control.ngControl.valueChanges) {
        control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe((value: string) => {
          if (value === '') {
            control.clear();
          }
          this._changeDetectorRef.markForCheck();
        });
      }
    }
  }

  public ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  public iconActive: boolean = false;

  public get iconPosition() {
    if(!this.classValid && this.classBlurred) {
      return '0rem'
    }
    else if(this.classValid) {
    return '-2.5rem'
  } else {
    return '-5rem'
  }
  }

  public iconChange() {
    this.iconActive = !this.iconActive;
  }

}
