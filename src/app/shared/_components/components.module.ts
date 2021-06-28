import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBaseComponent } from './input/input-base.component';
import { CheckboxBaseComponent } from './checkbox/checkbox-base.component';
import { ListBaseComponent } from './list/list-base.component';
import { CalendarBaseModule } from './calendar-base/calendar-base.module';
import { IconboxComponent } from './iconbox/iconbox.component';
import { DirectivesModule } from '@shared/directives/directives.module';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';



@NgModule({
  declarations: [
    InputBaseComponent,
    CheckboxBaseComponent,
    ListBaseComponent,
    IconboxComponent,
    ScrollContainerComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    InputBaseComponent,
    CheckboxBaseComponent,
    ListBaseComponent,
    CalendarBaseModule,
    IconboxComponent,
    DirectivesModule,
    ScrollContainerComponent
  ]
})
export class ComponentsModule { }
