import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[app-icon]',
  template: `
    <div class="my-class">
          <ng-content></ng-content>
    </div>
  `
})
export class IconComponent {

}