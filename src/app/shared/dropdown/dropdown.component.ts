import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
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
  @Input('multi') multi = false;
  @Input('icon') icon: string | null = null;
  @Input('checkbox') checkbox: boolean | null = false;
  @Input('options') options: DropdownOptions[] | null = null;

  @Output() onSelect = new EventEmitter<any>();

  public active: boolean | null = null;
  public selected: any = [];
  public value: any;
  private _label: string | null = null;

  public touched: boolean = false;
  public focused: boolean = false;
  public blurred: boolean = false;


   constructor(protected _elementRef: ElementRef<any>, @Optional() public ngControl: NgControl) {
    if (ngControl) { ngControl.valueAccessor = this; }
   }


@Input() set label(label: string | null) {
    this._label = label;
}

get label(): string | null {
  return this._label
  }

  get value2(): string {
    if (this.multi && this.selected.length > 1 ) {
      return `${this.selected.length} selected`
    }

    return this.selected.length ? this.selected[0] : null;
  }

  ngOnInit(): void {
  }

  public get title() {
    return this.selected ? this.selected: this.label
  }

  @HostListener('mouseover', ['$event'])
  onHover(event:any) {
    event.preventDefault()
    event.stopPropagation()
    this.touched = true;
    this.active = true
  }

  @HostListener('mouseleave', ['$event'])
  onHoverOut(event:any) {
    event.preventDefault()
    event.stopPropagation()
    this.active = !this.multi && false;
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

  public resetSelected(index: number) {
    if (this.multi) {

    }
    else {
      this.options?.forEach(el => el.selected = false)
    }
  }

  // @HostBinding('class.is-filled')
  // public get isFilled(): boolean {
  //   return this.active === true;
  // }

  @HostBinding('class.is-blurred')
  public get isBlurred(): boolean {
    return this.active === false;
  }
  @HostBinding('class.is-focused')
  public get isFocused(): boolean {
    return this.active === true;
  }

  @HostBinding('class.is-filled')
  public get isFilled(): boolean {
    return !!this.selected.length;
  }

  @HostBinding('class.is-valid')
  public get classValid(): boolean {
    if (this.ngControl) {
      return this.ngControl.control?.status === "VALID";
    }
    return !!this.selected.length && true;
   
  }

  @HostBinding('class.is-touched')
  public get isTouched(): boolean {
    return this.touched;
  }




  public onFocus() {
    console.log('FOCUS')
    this.focused = true;
    this.touched = true;
  }

  public onInput(event:any) {
  }

  public onBlur(){}

  public select(value: any) {
    this.selected = value;
    this.propagateChange(value);
    this.onSelect.emit(this.selected)
  }
  

}
