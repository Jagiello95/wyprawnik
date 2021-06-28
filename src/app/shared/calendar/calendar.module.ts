import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { ComponentsModule } from '@shared/_components/components.module';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    NgDragDropModule.forRoot()
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
