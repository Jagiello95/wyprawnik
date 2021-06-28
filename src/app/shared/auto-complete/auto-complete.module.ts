import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { ComponentsModule } from '@shared/_components/components.module';



@NgModule({
  declarations: [
    AutoCompleteComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule
  ],
  exports: [
    AutoCompleteComponent
  ]
})
export class AutoCompleteModule { }
