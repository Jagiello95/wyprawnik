import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { InputModule } from '@shared/input';
import { ComponentsModule } from '@shared/_components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    InputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ColorPickerComponent
  ]
})
export class ColorPickerModule { }
