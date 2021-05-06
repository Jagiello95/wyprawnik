import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-squad-template',
  templateUrl: './squad-template.component.html',
  styleUrls: ['./squad-template.component.scss']
})
export class SquadTemplateComponent implements OnInit {
  public formGroup = this.builder.group({
    email: [null, []],
    password: [null, []]
  });
  constructor(public builder: FormBuilder) { }

  ngOnInit(): void {
  }

}
