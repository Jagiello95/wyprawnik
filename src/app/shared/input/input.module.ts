import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputDirective } from '@shared/input/input.directive';

@NgModule({
  declarations: [InputDirective],
  imports: [CommonModule],
  exports: [InputDirective],
})
export class InputModule {}
