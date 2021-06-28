import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

enum ValidityStatus {
  valid= "VALID",
  invalid= "INVALID"
}
@Directive({
  selector: '[formControlName]'
})
export class ControlDirective implements OnInit {
  public blurred: boolean = false;
  constructor(private control : NgControl, private elementRef: ElementRef) { }

  ngOnInit() {
    console.log(this.elementRef)
  }

  

  // @HostBinding('class.is-filled')
  // public get classRequired(): boolean {
  //   return Array.isArray(this.control.control?.value) ?
  //   this.control.control?.value.length:
  //   this.control.control?.value
  // }

  // @HostBinding('class.is-touched')
  // public get classTouched(): boolean {
  //   return this.control.control?.touched === true;
  // }

  // @HostBinding('class.is-dirty')
  // public get classDirty(): boolean {
  //   return this.control.control?.pristine !== true;
  // }

  // @HostBinding('class.is-valid')
  // public get classValid(): boolean {
  //   return this.control.control?.status === ValidityStatus.valid;
  // }

}
