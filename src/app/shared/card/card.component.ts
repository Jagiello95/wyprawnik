import { Component, ContentChild, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div class="app-card-container">
    <div class="app-card-header">
      <ng-content select="[header]"></ng-content>
    </div>
    <div class="app-card-main">
      <ng-content select="[body]"></ng-content>
    </div>
    <div class="app-card-footer"></div>
  </div>`
})

export class CardComponent implements OnInit {
  @Input('type') type: string = "regular";
  @Input('icon') icon!: string;

  constructor() { }

  @HostBinding('class') class = `app-card-${this.type}`;

  ngOnInit(): void {
  }

}
