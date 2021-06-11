import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '@api/models/login.model';

@Injectable()
export class SelectedForm {
  public form!: FormGroup;
  public model!: any;
  constructor(private readonly builder: FormBuilder) { }

  public get isValid(): boolean {
    return this.form.valid;
  }

  public init(): FormGroup {
    this.form = this.builder.group({
      selected: [null],
    });

    this.form.valueChanges.subscribe((value: any) => {
      this.model = {
        ...value
      }
    })

    return this.form;
  }

  public prepareModel(): LoginModel {
    return this.model;
  }
}
