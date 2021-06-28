import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class TableForm {
  public form!: FormGroup;
  public model!: any;
  constructor(private readonly builder: FormBuilder) { }

  public get isValid(): boolean {
    return this.form.valid;
  }

  public init(model:any): FormGroup {
    this.form = this.builder.group({
    });
    model.map((a:any,i:any)=> {
      const sbuilder = this.builder.group({
      });
      Object.keys(model[i]).map((s:any)=> {
        sbuilder.setControl(s, new FormControl(a[s], []))})


    this.form.addControl(i, sbuilder)
    this.model = this.form.value
  })
  

    this.form.valueChanges.subscribe((value: any) => {
      this.model = {
        ...value
      }
    })

    return this.form;
  }

  public createItem(items:string[]): any {
    const sbuilder = this.builder.group({
    });

    items.map((s:any)=>sbuilder.setControl(s, new FormControl('')))
    return sbuilder
  }

  public prepareModel(): any {
    return this.model;
    
  }
  

}
