import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Optional, Output } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  host:     {'[class.is-animated]':'animateIcon'}
})
export class InputComponent implements OnInit {
  @Input('label') label: string | null = null;
  @Input('floatLabel') floatLabel: boolean = false;
  @Input('icon') icon: string | null = null;
  @Input('animateIcon') animateIcon: boolean = false;
  @Input('disabled') disabled: boolean = false;

  @Output() onInput = new EventEmitter<any>();
  @Output() onEnter = new EventEmitter<any>();
  public value: any;
  private blurred: boolean = false;
  private focused: boolean = false;
  public touched: boolean = false;


  constructor(@Optional() public ngControl?: NgControl) {
    if (ngControl) { ngControl.valueAccessor = this} ;
  }

  public get content() {
    return this.value ? this.value : null;
  }

  onChange = (value:any) => {
    if (value) {
      this.writeValue(value)
    }
  };

  onTouched = () => {};

  ngOnInit(): void {
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

  public input($event:any) {
    if ($event) {
      this.touched = true;
    }
    this.writeValue($event)
    this.onChange($event)
    this.onInput.emit($event)
  }

  onBlur() {
    this.blurred = true;
    this.focused = false
  }

  enter() {
    console.log('hello')
    this.onEnter.emit();
  }

  @HostBinding('class.is-blurred')
  public get isBlurred(): boolean {
    return this.blurred;
  }

  onFocus() {
    console.log('Touched')
    this.blurred = false;
    this.focused = true;
    this.touched = true;
  }

  @HostBinding('class.is-focused')
  public get isFocused(): boolean {
    return this.focused;
  }

  @HostBinding('class.is-filled')
  public get isFilled(): boolean {
    return this.value?.length;
  }

  @HostBinding('class.is-touched')
  public get isTouched(): boolean { 
    return this.touched === true;
  }

  @HostBinding('class.is-valid')
  public get classValid(): boolean {
    if (this.ngControl) {
      return this.ngControl.control?.status === "VALID";
    }
    return this.value?.length && true;
  }

}
