import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconboxComponent } from '@shared/_components/iconbox/iconbox.component';
import { ControlDirective } from './control.directive';
import { IconComponent } from './icon.component';


@NgModule({
  declarations: [ControlDirective, IconComponent],
  imports: [CommonModule],
  exports: [ControlDirective, IconComponent],
})
export class DirectivesModule {}
