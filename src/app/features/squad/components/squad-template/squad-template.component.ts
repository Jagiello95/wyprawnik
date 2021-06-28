import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DropdownOptions } from '@shared/dropdown/dropdown.component';

@Component({
  selector: 'app-squad-template',
  templateUrl: './squad-template.component.html',
  styleUrls: ['./squad-template.component.scss']
})
export class SquadTemplateComponent implements OnInit {
  public options: DropdownOptions[] = [
    {value:1, label: 'One'},
    {value:2, label: 'Two'},
    {value:3, label: 'Three'},
    {value:4, label: 'Four'},
    {value:5, label: 'Five'}
  ];
  

  public formGroup = this.builder.group({
    name: [null, [Validators.minLength(3), Validators.required]],
    desc: [null, [Validators.required]],
    date: [null, [Validators.required]],
    bool:[true, [Validators.required]]
  });
  public headers: any[] = [
    {title:"ID",type:"string"},  
    {title:"Name",type:"string"}, 
    {title:"Age",type:"string"}, 
    {title:"Gender",type:"boolean"}, 
    {title:"Country",type:"color-picker"}
  ]
  public rows: any[] = [
    {
    ID:"2",
    Name: "John",
    Age: "69",
    Gender: "Male",
    Country: "Poland"
    },
    {
    ID:"1",
    Name: "Mohn",
    Age: "69",
    Gender: "Male",
    Country: "Poland"
    },
    {
    ID:"3",
    Name: "Lohn",
    Age: "69",
    Gender: "Male",
    Country: "Poland"
    },
    {
    ID:"5",
    Name: "Rohn",
    Age: "69",
    Gender: "Male",
    Country: "Poland"
    },
    {
    ID:"4",
    Name: "Kohn",
    Age: "69",
    Gender: "Male",
    Country: "Poland"
    },


]
  constructor(public builder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(console.log)
  }

  public log(event: any) {
    console.log(event)
  }

  public onChange(event:any) {
    console.log(event)
  }



}
