import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@shared/checkbox/checkbox.component'



@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule {}
