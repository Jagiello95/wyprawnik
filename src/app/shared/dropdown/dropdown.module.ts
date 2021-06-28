import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentsModule } from '@shared/_components/components.module';



@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    DropdownComponent
  ],
 
})
export class DropdownModule { }
