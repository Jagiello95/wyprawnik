import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';


@Directive({
  selector: '[acceptEditRow]'
})
export class AcceptEditRowDirective implements OnInit {
  public event = new Subject<boolean>();
  constructor() { }

  ngOnInit() {
    console.log('init')
  }
  @HostListener('click', ['$event'])
  onClick() {
    console.log('click')
    this.event.next(false)
  }
}
