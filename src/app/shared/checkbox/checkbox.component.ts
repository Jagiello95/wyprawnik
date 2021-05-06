import { Component, ContentChild, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  template: `
  <div class="app-checkbox-container">
  <div class="app-checkbox" (click)="select()">
    <div *ngIf="selected" class="app-checkbox-dot"></div>
  </div>
  <div class="app-checkbox-label" *ngIf="label"><span>{{label}}</span></div>
  </div>
  `,
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CheckboxComponent),
    }
  ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() public label: string | null = null;
  @Output() public checkboxClicked = new EventEmitter<any>();
  public selected: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public checkboxAction($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.checkboxClicked.emit();

  }

  public select() {
    this.selected = !this.selected;
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

}
