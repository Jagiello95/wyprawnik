import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
@Input('options') public options!: string[];
@Output() public tabChosen = new EventEmitter<any>();
public icons = new Map([
  ['new_squad', 'pi pi-compass'],
  ['my_squads', 'pi pi-users'],
  ['find_squad', 'pi pi-user-plus'],
])
  constructor() { }

  ngOnInit(): void {
    console.log(this.icons.get('find_squads'))
  }

  public chooseTab(event: string) {
    console.log(event)
    this.tabChosen.emit(event)
  }

}
