import { Component, ContentChild, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { row, TableColumn, TableSortDirection } from '../table.model';
import { TableForm } from './table.form';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableForm],
  host:     {'[class.striped]':'striped'}
})
export class TableComponent implements OnInit {
  @ContentChild('customColumn', {static: false}) customColumn!: TemplateRef<any>;
  @ContentChild('confirmRowEdit', {static: false}) confirmRowEdit!: TemplateRef<any>;
  @ContentChild('initRowEdit', {static: false}) initRowEdit!: TemplateRef<any>;
  @ContentChild('cancelRowEdit', {static: false}) cancelRowEdit!: TemplateRef<any>;
  @ContentChild('deleteRow', {static: false}) deleteRow!: TemplateRef<any>;
  @Input() searchable: boolean = false;
  @Input() sortable: boolean = false;
  @Input() editable: boolean = false;
  @Input() deletable: boolean = false;
  @Input() addable: boolean = false;

  @Input() striped: boolean = true;

  @Input() customColumnTitle: string = '';
  @Input() editColumnTitle: string = '';

  @Input() headers: any[] = []
  @Input() searchControls: string[] = ['a','dropdown','c','d','e', ]
  @Input('data') rows: row[] = [];

  @Output() onAction = new EventEmitter<any>();
  @Output() onRowSave = new EventEmitter<any>();
  public rowscopy: row[] = []
  public data1 =  [{value:1, label: 'kala'},
  {value:2, label: 'kaka'}]


  public form!: FormGroup;
  public dropdownValues: any;
  public editableRows: FormGroup = this.builder.group({});

  public selected: TableColumn = {
    col: null, 
    dir: TableSortDirection.none
  }

  public tableSortDirection = TableSortDirection;
  
  constructor(private tableForm: TableForm, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.assignDataCopy();
    this.createForm();
    this.prepareDropdownValues();
    
  
  }
  
  @HostListener('acceptEvent', ['$event.target'])
  onAcceptEvent(event:any) {
    alert(event)

 }

  public getForm(i:number):FormGroup {
    return this.form.get(`${i}`) as FormGroup
  }

  public onInput(col: string, event: any) {

    this.assignData();
    this.rows = this.rows.filter(el => el[col].includes(event))
  }

  public onSort(col:string, dir: TableSortDirection): void {
    switch(dir) {
      case TableSortDirection.none: 
        this.assignSelectedColumn(null, TableSortDirection.none);
        this.assignData();
        break;
      case TableSortDirection.up:
        this.assignSelectedColumn(col, dir)
        this.assignData();
        this.rows = this.rows.sort((a, b) => { return a[col].localeCompare(b[col])})
        break;
      case TableSortDirection.down:
        this.assignSelectedColumn(col, dir)
        this.assignData();
        this.rows = this.rows.sort((a, b) => { return b[col].localeCompare(a[col])})
        break;
    }
    this.createForm();
  }

  public activate(i: number) {
    this.editableRows.get(`${i}`)?.setValue(true)
  }

  public accept(i:number) {
    // this.editableRows.get(`${i}`)?.setValue(false)
    const model = this.tableForm.prepareModel();

    if (model) {
      // this.rows = [...Object.keys(model).map((el)=> model[el])];
      this.rows[i] = model[i]
      this.assignDataCopy();
    }
   this.onRowSave.emit(model)

  }

  public deny(i:number) {
    this.rows[i] = this.rowscopy[i]
    this.form = this.tableForm.init(this.rows)
    this.assignDataCopy();
  }

  public isActive(i:number) {
    return this.editableRows.get(`${i}`)?.value;
  }

  public createForm() {
    this.form = this.tableForm.init(this.rows)
    this.rows.map((el, i) => this.editableRows.addControl(`${i}`, new FormControl(false)))
  }

  public assignData() {
    this.rows = this.rowscopy.slice(0);
  }

  public assignDataCopy() {
    this.rowscopy = this.rows.slice(0);
  }

  public assignSelectedColumn(col: string | null , dir: TableSortDirection) {
      this.selected.col = col;
      this.selected.dir = dir;
  }

  public getData(column:string) {
    return [
      {value:1, label: 'kala'},
      {value:2, label: 'kaka'}
    ]
  }

  public sort(event:any, i:any, column:any, type: string) {
    this.rows = this.rowscopy
    if (!event.length) {
      return
    }
    if (type === 'input') {

      this.rows = this.rows.filter((a) => {return a[column].includes(event)})
    } else {

      this.rows = this.rows.filter((a) => {return event.includes(a[column])})
    }

  }

  public prepareDropdownValues() {
    this.dropdownValues = {}
    Object.keys(this.rows[0]).map(key => { this.dropdownValues[key] = 
      this.rows.map((row) => {
       return { value: row[key], label: row[key]}
    })
    
})}

shout() {
  alert('shout')
}

action(type: string, rowIndex:number) {
  if (type === 'custom') {
    this.onAction.emit({row: rowIndex})
  }
}

public delete(index:number) {
  this.rows = this.rows.filter((row, i)=> i !== index)
}

public get numOfCols() {
  let num = this.headers.length;
  if(this.editable || this.deletable ) {
    num++
  }
  if(this.customColumn) {
    num++
  }
  return num;
}
}
