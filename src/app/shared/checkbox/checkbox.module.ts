import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@shared/checkbox/checkbox.component'
import { ComponentsModule } from '@shared/_components/components.module';



@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    ComponentsModule,
    CommonModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule {}
