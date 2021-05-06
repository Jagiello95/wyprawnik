import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';



@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent
  ],
 
})
export class DropdownModule { }
