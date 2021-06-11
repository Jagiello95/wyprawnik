import { Component, forwardRef, HostBinding, HostListener, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputEventHandler } from './input-base.model';

@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss'],
})
export class InputBaseComponent implements OnInit, ControlValueAccessor, InputEventHandler {
  value!: string;
  @Input('icon') icon: string | null = null;
  @Input('label') label: string | null = null;
  public iconActive: boolean = false;
  public filled: boolean = false;
  public blurred: boolean = false;
  public focused: boolean = false;

  @Input()
  increment!: number;

  onChange = (value:any) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;
  
  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }
  

  ngOnInit(): void {
  }

  public get iconPosition() {
    return this.iconActive ? '0rem' : '-2.5rem'
  }

  public iconChange() {
    this.iconActive = !this.iconActive;
  }

  
  writeValue(quantity: string) {
    this.value = quantity;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  public onInput($event:any) {
    this.writeValue($event.target.value)
    this.onChange($event.target.value)
  }

  @HostListener('blur', ['$event'])
  onBlur() {
    this.blurred = true;
    this.focused = false
  }

  @HostBinding('class.is-blurred')
  public get isBlurred(): boolean {
    return this.blurred;
  }

  @HostListener('focus', ['$event'])
  onFocus() {
    this.blurred = false;
    this.focused = true
  }

  @HostBinding('class.is-focused')
  public get isFocused(): boolean {
    return this.focused;
  }






}
