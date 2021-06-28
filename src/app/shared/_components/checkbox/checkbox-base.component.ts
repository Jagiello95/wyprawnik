import { Component, ContentChild, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputEventHandler } from '@shared/_components/input/input-base.model';

@Component({
  selector: '[appCheckbox]',
  template: `
  <div class="checkbox-container" [class.disabled]="disabled">
  <div class="checkbox" [class.no-pointer]="disabled" [class.selected] = "selected" (click)=select()>
  <div class="scroll-container">
    <div class="icon-container">
      <div class="component-icon" ><i *ngIf="selected" class={{successIcon}}></i>   </div>
      <div class="component-icon" ><i *ngIf="!selected" class="{{failIcon }}"></i> </div>
 
  </div>
</div>

</div>
  <div *ngIf="label" class="checkbox-label">{{label}}</div>
  </div>
  `
})
export class CheckboxBaseComponent implements OnInit {
  @Input() public label: string | null = null;
  @Input() public disabled: boolean | null = false;
  @Input() public selected: boolean | null = null;
  @Input() public icon: string | null = "pi pi-check";
  @Input() public successIcon: string | null = "pi pi-check"
  @Input() public failIcon: string | null = null;
  @Output() selectedEvent = new EventEmitter<boolean>();
  

  ngOnInit(): void {
  }

  public checkboxAction($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  public select() {
    this.selected = !this.selected;
    this.selectedEvent.emit(this.selected)
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
