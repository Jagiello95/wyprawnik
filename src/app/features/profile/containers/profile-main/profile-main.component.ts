import { Component, OnInit } from '@angular/core';
import { SquadRest } from '@api/rest/squads.rest';
import { ProfileTabs } from '@shared/models/enum/profile-tabs.enum';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {
  public data: any;
  public tabs = ProfileTabs;
  public selected: ProfileTabs = 0;

  constructor(private readonly rest: SquadRest) { }

  ngOnInit(): void {
  }

  public changedTab(index:number) {
    this.selected = index;
    this.getData()
  }

  public getData() {
    return this.rest.getSquads()
    .pipe(tap(console.log))
    .subscribe((el)=> this.data = el)
  }

}
