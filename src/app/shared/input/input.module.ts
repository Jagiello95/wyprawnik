import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/_components/components.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [InputComponent],
})
export class InputModule {}
