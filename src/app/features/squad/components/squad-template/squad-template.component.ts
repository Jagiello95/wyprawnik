import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-squad-template',
  templateUrl: './squad-template.component.html',
  styleUrls: ['./squad-template.component.scss']
})
export class SquadTemplateComponent implements OnInit {
  public formGroup = this.builder.group({
    name: [null, [Validators.minLength(3), Validators.required]],
    desc: [null, [Validators.required]],
    date: [null, [Validators.required]],
    bool:[null, [Validators.required]]
  });
  constructor(public builder: FormBuilder) { }

  ngOnInit(): void {
  }

  public log(event: any) {
    console.log(event)
  }



}
