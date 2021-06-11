import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-squads',
  templateUrl: './profile-squads.component.html',
  styleUrls: ['./profile-squads.component.scss']
})
export class ProfileSquadsComponent implements OnInit {
  @Input('data') data: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
