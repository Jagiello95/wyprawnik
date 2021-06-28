import { AfterContentInit, ContentChild, Directive, HostBinding, Input } from '@angular/core';
import { CancelEditRowDirective } from './cancel-edit-row.directive';
import { EditRowDirective } from './edit-row.directive';

@Directive({
  selector: '[appEditableRow]'
})
export class EditableRowDirective implements AfterContentInit {
  @Input() ref!: any;
  @ContentChild(EditRowDirective) edit!: EditRowDirective;
  @ContentChild(CancelEditRowDirective) cancelEdit!: CancelEditRowDirective;
  public edited:any = false;
  constructor() { }

  ngAfterContentInit() {
    this.edit.event.subscribe((bool:boolean)=> {console.log(bool), this.edited = bool; this.ref.detectChanges()});
    // this.cancelEdit.event.subscribe((bool:boolean)=> this.edited = bool);
  
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
