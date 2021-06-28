import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarBaseComponent } from './calendar-base/calendar-base.component';
import { CalendarService } from './calendar-base/calendar.service';



@NgModule({
  declarations: [
    CalendarBaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarBaseComponent
  ]
})
export class CalendarBaseModule { }
