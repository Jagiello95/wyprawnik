import { Component, ContentChild, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button (click)="buttonAction($event)"> 
  <i *ngIf="icon" class="pi pi-check"></i>
  <ng-content></ng-content>
  </button>
  `
})
export class ButtonComponent implements OnInit {
  @Input('type') type: string = "outline";
  @Input('icon') icon!: string;
  @Input('theme') theme: string = "primary";
  @Output() public clicked = new EventEmitter<any>();
  constructor() { }

  @HostBinding('class') class = `button-${this.type}`;

  ngOnInit(): void {
  }

  public buttonAction($event: Event) {
    $event.preventDefault()
    $event.stopPropagation()
    this.clicked.emit()
  }

}
