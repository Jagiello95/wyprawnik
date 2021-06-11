import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '@api/models/login.model';

@Injectable()
export class LoginForm {
  public form!: FormGroup;
  public model!: any;
  constructor(private readonly builder: FormBuilder) { }

  public get isValid(): boolean {
    return this.form.valid;
  }

  public init(): FormGroup {
    this.form = this.builder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
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
