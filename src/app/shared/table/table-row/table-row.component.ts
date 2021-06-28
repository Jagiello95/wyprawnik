import { AfterViewInit, Component, ContentChild, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { AcceptEditRowDirective } from '../directives/accept-row.directive';
import { CancelEditRowDirective } from '../directives/cancel-edit-row.directive';
import { EditRowDirective } from '../directives/edit-row.directive';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements AfterViewInit  {

  @ContentChild(EditRowDirective) edit!: EditRowDirective;
  @ContentChild(CancelEditRowDirective) cancelEdit!: CancelEditRowDirective;
  @ContentChild(AcceptEditRowDirective) acceptEdit!: AcceptEditRowDirective;
  @Output() acceptEvent = new EventEmitter<boolean>();
  @Output() denyEvent = new EventEmitter<boolean>();
  public edited:any = false;
  constructor() { }

  ngAfterViewInit() {
    this.edit && this.edit.event.subscribe((bool:boolean)=> {this.edited = bool;});
    this.cancelEdit && this.cancelEdit.event.subscribe((bool:boolean)=> {console.log(1), this.denyEvent.emit(true); this.edited = bool});
    this.acceptEdit && this.acceptEdit.event.subscribe((bool:boolean)=> {console.log(2), this.acceptEvent.emit(true); this.edited = bool});
  
  }

  @HostBinding('attr.data-edited')
  public get isEdited(): boolean {
    return this.edited
  }

  @HostBinding('class.edited')
  public get isEdited1(): boolean {
    return this.edited
  }

}
