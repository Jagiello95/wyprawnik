import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Optional, Output } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { DropdownOptions } from '@shared/dropdown/dropdown.component';
import { InputEventHandler } from '@shared/_components/input/input-base.model';

const noOptionFound = [
  {
    value: null, label: "No matching results"
  }
]
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
})

export class AutoCompleteComponent implements OnInit, ControlValueAccessor, InputEventHandler {
  @Input('multi') multi = false;
  @Input('minInput') minInput:string = '0';
  @Input('icon') icon: string | null = null;
  @Input('checkbox') checkbox: boolean | null = false;
  @Input('options') options: DropdownOptions[] | null = null;
  @Output() onSelect = new EventEmitter<any>();
  @Output() onInput = new EventEmitter<any>();
  public inputValue: string = ''
  public active: boolean | null = null;
  public selected: any = [];
  public value: any;
  private dirty: boolean = false;
  private _label: string | null = null;
  private optionsCopy: DropdownOptions[] | null = null;
  constructor(protected _elementRef: ElementRef<any>, @Optional() public ngControl: NgControl) {
    if (ngControl) { ngControl.valueAccessor = this; }
  }

  //user interaction
  public touched: boolean = false;
  public filled: boolean = false;
  public focused: boolean = false;
  public blurred: boolean = false;

  ngOnInit(): void {
    this.optionsCopy = this.options;
  }

  @Input() set label(label: string | null) {
    this._label = label;
  }

  get label(): string | null {
    return this._label
  }

  get value2(): string | null {
    return this.selected.length ? this.selected[0] : null;
  }

  get isAllowed(): boolean {
    return this.inputValue.length >= Number(this.minInput)
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


  public resetSelected(index: number) {
    if (this.multi) {

    }
    else {
      this.options?.forEach(el => el.selected = false)
    }
  }

  @HostBinding('class.is-filled')
  public get isFilled(): boolean {
    return !!this.inputValue.length;
  }

  @HostBinding('class.is-blurred')
  public get isBlurred(): boolean {
    return this.blurred;
  }
  @HostBinding('class.is-focused')
  public get isFocused(): boolean {
    return this.focused;
  }

  @HostBinding('class.is-touched')
  public get isTouched(): boolean {
    return this.touched;
  }

  @HostBinding('class.is-valid')
  public get classValid(): boolean {
    if (this.ngControl) {
      return this.ngControl.control?.status === "VALID";
    }
    return !!this.inputValue.length && true;
   
  }


  public onFocus() {
    this.touched = true;
    this.focused = true;
    this.blurred = false;
  }
  public onBlur() {

    this.blurred = true;
  }
  public input(event:any) {
    console.log(event)
    this.inputValue = event;

    if (event?.length > Number(this.minInput)) {
        this.dirty = true;
    }
    if (this.optionsCopy && this.dirty) {
      this.options = []
      this.options = this.optionsCopy;
      this.options = this.optionsCopy.filter(option => option.label.includes(event))
      this.options = this.options.length ? this.options : noOptionFound
    }
    this.onInput.emit(this.inputValue)
  }

  public select(value: any) {

    this.selected = value;
    this.input(value)
    this.onSelect.emit(this.selected)
    this.propagateChange(value);
  }



// Control value accessor utils
  
  public writeValue(value: any) {
    console.log(value)
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
}
