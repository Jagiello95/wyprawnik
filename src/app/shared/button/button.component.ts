import { Component, ContentChild, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button (click)="buttonAction($event)"> 
  <i *ngIf="icon" class="pi pi-check"></i>
  <ng-content></ng-content>
  </button>
  `,
  host:     {
    '[class.button-outline]':'type === "outline"',
    '[class.button-solid]':'type === "solid"',
    '[class.button-round]':'round',
    '[class.button-small]':'size === "s"',
    '[class.button-medium]':'size === "m"',
    '[class.button-large]':'size === "l"',

}
})
export class ButtonComponent implements OnInit {
  @Input('type') set type(type: string) {
    this._type = type;
  }

  get type(): string {
    return this._type}
    

  @Input('icon') icon!: string;
  @Input('theme') theme: string = "primary";
  @Output() public clicked = new EventEmitter<any>();

  @Input() round!: boolean;
  @Input() size: string ="m"

  private _type: string = ''
  constructor() { }

  public get isOutline() {
    return this.type === 'outline'
  }

  ngOnInit(): void {
  }

  public buttonAction($event: Event) {

    this.clicked.emit()
  }

}
