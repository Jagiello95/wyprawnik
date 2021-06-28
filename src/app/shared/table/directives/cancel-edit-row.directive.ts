import { Directive, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[cancelEditRow]'
})
export class CancelEditRowDirective {
  public event = new Subject<boolean>();
  constructor() { }

  @HostListener('click', ['$event'])
  onClick() {
    console.log('click')
    this.event.next(false)
  }
}
