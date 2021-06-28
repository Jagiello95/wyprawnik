import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: '[app-iconbox]',
  templateUrl: './iconbox.component.html',
  styleUrls: ['./iconbox.component.scss']
})
export class IconboxComponent implements OnInit {
  public icon : string | null = null;
  constructor() { }

  ngOnInit(): void {
  }


}
