import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlDirective } from './control.directive';
import { IconComponent } from './icon.component';


@NgModule({
  declarations: [ControlDirective, IconComponent],
  imports: [CommonModule],
  exports: [ControlDirective, IconComponent],
})
export class DirectivesModule {}
