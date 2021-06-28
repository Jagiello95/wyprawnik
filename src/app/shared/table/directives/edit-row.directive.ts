import { Directive, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[editRow]'
})
export class EditRowDirective {
  public event = new Subject<boolean>();
  constructor() { }

  @HostListener('click', ['$event'])
  onClick() {
    this.event.next(true)
  }
}
