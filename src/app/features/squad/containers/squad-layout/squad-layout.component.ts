import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-squad-layout',
  templateUrl: './squad-layout.component.html',
  styleUrls: ['./squad-layout.component.scss']
})
export class SquadLayoutComponent implements OnInit {
  public tabs = [
    "my_squads",
    "new_squad",
    "find_squad",
  ];

  public title = new Map([
    ['my_squads', 'My squads'],
    ['new_squad', 'New squad'],
    ['find_squad', 'Search']
  ])

  public chosenTab!: string;;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  
  public changeTab(tab: string) {
    this.chosenTab = tab;
    this.router.navigate(['/squad/new']);
  }


}
