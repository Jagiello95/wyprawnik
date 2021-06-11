import { Component, ContentChild, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputEventHandler } from '@shared/_components/input/input-base.model';

@Component({
  selector: 'app-checkbox',
  template: `
  <div class="checkbox-container">
  <div class="checkbox" [class.selected] = "selected" (click)=select()>
  <div class="scroll-container">
    <div class="icon-container">
      <div class="component-icon"><i class="pi pi-check"></i>   </div>
      <div class="component-icon"> </div>
 
  </div>
</div>

</div>
  <div *ngIf="label" class="checkbox-label">{{label}}</div>
  </div>
  `
})
export class CheckboxComponent implements OnInit, ControlValueAccessor, InputEventHandler {
  @Input() public label: string | null = null;
  public selected: boolean | null = null;
  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
   }

  ngOnInit(): void {
  }

  public checkboxAction($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  public select() {
    this.selected = !this.selected;
    console.log(this.selected, this.ngControl)
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

  
  @HostBinding('class.is-blurred')
  public get isBlurred(): boolean {
    return this.selected === false;
  }

  @HostBinding('class.is-focused')
  public get isFocused(): boolean {
    return false;
  }



}
