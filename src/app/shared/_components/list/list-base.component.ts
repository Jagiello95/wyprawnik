import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownOptions } from '@shared/dropdown/dropdown.component';

@Component({
  selector: '[appList]',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss']
})
export class ListBaseComponent implements OnInit {
  @Input('multi') multi = false;
  @Input('checkbox') checkbox: boolean | null = false;
  @Input('options') options: DropdownOptions[] | null = null;
  @Output() selectEvent: EventEmitter<number[]> = new EventEmitter<number[]>();

  public active: boolean | null = null;
  public value: any = [];
  private _label: string | null = null;
  constructor() { }

  ngOnInit(): void {
    console.log(this.options)
  }

  public chooseOption(index: number) {
    console.log(index)
    if (!this.options) {return}

    if (this.multi && this.options) {
      if (this.value.includes(this.options[index].value)) {
        this.options[index].selected = false;
        this.value.splice(this.value.indexOf(this.options[index].value), 1);
      }
      else {
        this.options.map(option => option.selected = false)
        this.value = []
        this.options[index].selected = true;
        this.value.push(this.options[index].value);
      }

    }
    else {
      this.resetSelected(index);
      this.value.push(this.options[index].value);
      this.options[index].selected = true;
      // this.value = this.options[index].value;
      this.active = false;
    }
    console.log(this.value)
    this.selectEvent.emit(this.value)
    
  }

  
@Input() set label(label: string | null) {
  this._label = label;
}

get label(): string | null {
return this._label
}

get value2(): string {
  if (this.multi && this.value.length > 1 ) {
    return `${this.value.length} selected`
  }
  return this.value[0] ? this.value[0] : null;
}

public resetSelected(index: number) {
  if (this.multi) {

  }
  else {
    this.value = []
    this.options?.forEach(el => el.selected = false)
  }
}


}
