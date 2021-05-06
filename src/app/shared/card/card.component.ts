import { Component, ContentChild, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input('type') type: string = "regular";
  @Input('icon') icon!: string;

  constructor() { }

  @HostBinding('class') class = `app-card-${this.type}`;

  ngOnInit(): void {
  }

}
