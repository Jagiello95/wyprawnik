import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { NgDragDropModule } from 'ng-drag-drop';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    NgDragDropModule.forRoot()
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
