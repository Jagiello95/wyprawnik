import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormControl, NgControl, Validators } from '@angular/forms';
import { colors } from '../colors';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  public colors = colors;
  @Input() heading: string = '';
  @Input() color: string | null = null;
  @Output() event = new EventEmitter();
  public show = false;
  public value: string = ''
  public form = this.builder.group({
    select: [null, [Validators.pattern(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i), Validators.required]],
    
  });
  public toggleColors() {
    this.show = !this.show;
    this.form.controls.select.setValue(this.ngControl.value);
  }

  public changeColor(color: string) {
    this.color = color;
    this.propagateChange(this.color);
    this.form.controls.select.setValue(this.color)
    this.event.emit(this.color); // Return color
    this.show = false;
  }
  
  public changeColorManual(color: any) {
    const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  
    if (isValid) {
      this.color = color;
      this.propagateChange(this.color);
      this.event.emit(this.color); // Return color
    }
  }

  constructor(private readonly builder: FormBuilder, @Optional() public ngControl: NgControl){
    if (ngControl) { ngControl.valueAccessor = this;  }
   }

  ngOnInit(): void {
    console.log(this.ngControl)
    if (this.ngControl.value) {
      this.changeColor(this.ngControl.value)
    
    }
  }

  public writeValue(value: any) {
    if (value !== undefined) {
      this.value = value;
    }
  }

  propagateChange = (_: any) => {
    // react to blur events etc.
  };

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {

  }

}
