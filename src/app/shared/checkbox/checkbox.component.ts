import { Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnInit, Optional, Output } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputEventHandler } from '@shared/_components/input/input-base.model';

enum SelectableComponents {
  checkbox = "app-checkbox",
  toggle = "app-toggle"
}

@Component({
  selector: 'app-checkbox, app-toggle',
  template: `
  <div appCheckbox [disabled]="disabled" [selected]="selected" [successIcon]="successIcon" [failIcon]="failIcon" [label]="label" (selectedEvent)="select($event)"></div>
  `
})
export class CheckboxComponent implements OnInit, ControlValueAccessor, InputEventHandler {
  @Input() public label: string | null = null;
  @Input() public disabled: boolean | null = false;
  public selected: boolean | null = null;
  public selector = this.elem.nativeElement.tagName.toLowerCase();
  public successIcon = "pi pi-check"
  public failIcon = this.selector === SelectableComponents.toggle ? "pi pi-times" : null;
  public touched: boolean = false;
  constructor(@Optional() public ngControl: NgControl, public elem: ElementRef) {
    if (ngControl) {ngControl.valueAccessor = this}
   }

  ngOnInit(): void {
    if (this.ngControl.value) {
      this.select(!!this.ngControl.value);
    }

  }

  public checkboxAction($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  public select(val: boolean) {
    this.touched = true;
    this.selected = val;
    console.log(val)
    this.propagateChange(this.selected);
  }

  public writeValue(selected: any) {
    if (selected !== undefined) {
      this.selected = selected
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

  @HostBinding('class.is-filled')
  public get isFilled(): boolean {
    return this.selected === true;
  }

  
  public get isBlurred(): boolean {
    return false;
  }

  public get isFocused(): boolean {
    return false;
  }

  @HostBinding('class.is-touched')
  public get isTouched(): boolean {
    return this.touched;
  }



}
