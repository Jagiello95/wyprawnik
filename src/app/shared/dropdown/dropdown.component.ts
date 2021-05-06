import { Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface DropdownOptions {
  value:any;
  label: string;
  selected?:boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DropdownComponent),
    }
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input('label') label = 'Dropdown'
  @Input('multi') multi = false;
  public options: DropdownOptions[] = [
    {value:1, label: 'One'},
    {value:2, label: 'Two'},
    {value:3, label: 'Three'},
    {value:4, label: 'Four'},
    {value:5, label: 'Five'}
  ];
  private _active: boolean = false;
  public value: any;
  public multiValue: any;

  constructor(
    protected _elementRef: ElementRef<any>,
  ) {
   }

  ngOnInit(): void {
  }

  public get title() {
    return this.value ? this.value: this.label
  }

  public get active() {
    return this._active;
  }

  public set active(value: boolean) {
    this._active = value;
  }

  @HostBinding('class.is-active')
  public get classActive(): boolean {
    return this.active;
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

}
