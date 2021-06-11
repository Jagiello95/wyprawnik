import { Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputEventHandler } from '@shared/_components/input/input-base.model';

export interface DropdownOptions {
  value:any;
  label: string;
  selected?:boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',

})
export class DropdownComponent implements OnInit, ControlValueAccessor, InputEventHandler {
  @Input('label') label = 'Dropdown'
  @Input('multi') multi = false;
  @Input('icon') icon: string | null = null;
  public options: DropdownOptions[] = [
    {value:1, label: 'One'},
    {value:2, label: 'Two'},
    {value:3, label: 'Three'},
    {value:4, label: 'Four'},
    {value:5, label: 'Five'}
  ];
  public active: boolean | null = null;
  public value: any;
  public multiValue: any;


   constructor(   protected _elementRef: ElementRef<any>, public ngControl: NgControl) {
    ngControl.valueAccessor = this;
   }

  ngOnInit(): void {
  }

  public get title() {
    return this.value ? this.value: this.label
  }

  @HostListener('mouseover', ['$event'])
  onHover() {
    this.active = true
  }

  @HostListener('mouseout', ['$event'])
  onHoverOut() {
    this.active = false
  }

  public chooseOption(index: number) {
    if (this.multi) {

    }
    this.resetSelected();
    this.options[index].selected = true;
    this.value = this.options[index].value;
    this.active = false;
    this.propagateChange(this.value);
  }

  public writeValue(value: any) {
    if (value !== undefined) {
      this.value = value;
    }
  }

  propagateChange = (_: any) => {
    // react to blur events etc.
  };

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {

  }

  public resetSelected() {
    this.options.forEach(el => el.selected = false)
  }

  @HostBinding('class.is-blurred')
  public get isBlurred(): boolean {
    return this.active === false;
  }
  @HostBinding('class.is-focused')
  public get isFocused(): boolean {
    return this.active === true;
  }

}
