import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import { CalendarService } from './calendar.service';

enum CalendarTypes {
  single,
  range
}

@Component({
  selector: '[app-calendar-base]',
  templateUrl: './calendar-base.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar-base.component.scss'],
})

export class CalendarBaseComponent implements OnInit {
  @Input() type: string = CalendarTypes[CalendarTypes.range];
  @Input('icon') icon: string | null = null;
  @Input('label') label: string | null = null;

  @Output() selectEvent: EventEmitter<moment.Moment |moment.Moment[] | null> = new EventEmitter<moment.Moment |moment.Moment[] | null>();

  public dateOne: moment.Moment | null = moment();
  public dateTwo: any | null = null;

  public placeholderOne: string | null = null;
  public placeholderTwo: string | null = null;

  public arrowLeft = String.fromCharCode(171)
  public arrowRight = String.fromCharCode(187)

  public calendar: any[] = [];

  public dayNames: string[] = ["s", "m", "t", "w", "t", "f", "s"]

  public startDate = this.dateOne?.clone().startOf('month').startOf('week')
  public endDate = this.dateOne?.clone().endOf('month').endOf('week')
  public active: boolean | null = true;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
   this.calendar = this.calendarService.buildCalendar(this.dateOne)
  }

  public onDayClick(day: any) {
    if (this.calendarService.isSelected(day, this.dateOne)) {
      this.dateOne = this.dateTwo = null;
      this.selectEvent.emit(this.dateOne)
    }
    else if(this.dateOne && this.type === "range" && this.calendarService.isAfter(this.dateOne, day)) {
      this.placeholderTwo = this.dateTwo && this.dateTwo.format("MMM Do YY");
      this.dateTwo=day;
      this.selectEvent.emit([this.dateOne, this.dateTwo])
      setTimeout(()=> {  this.placeholderTwo = null}, 800)
    }
    
     else {
      this.placeholderOne = this.dateOne && this.dateOne.format("MMM Do YY");;
      this.dateOne=day;
      this.selectEvent.emit(this.dateOne)
      setTimeout(()=> { this.placeholderOne = null}, 800)
    }


  }

  public styles(day:any) {
    return this.calendarService.dayStyles(day, this.dateOne, this.dateTwo)
  }

  public beforeToday(day:any) {
    return this.calendarService.beforeToday(day)
  }

  public get currentMonthName() {
    return moment().format("MMMM")
  }

  public get currentYear(){
    return moment().format('YYYY')
  }

  public get currentMonth() {
    return this.dateOne?.isSame(new Date(), 'month')
  }

  public previousMonth() {
    if(this.dateOne) {
    this.dateOne = this.dateOne.clone().subtract(1, "month")
    this.calendar = this.calendarService.buildCalendar(this.dateOne)
  }
  }

  public nextMonth() {
    if(this.dateOne){
    this.dateOne = this.dateOne.clone().add(1, "month")
    this.calendar = this.calendarService.buildCalendar(this.dateOne)
  }
  }
  
  public isToday(day: any) {
    return this.calendarService.isSelected(day, this.dateOne)
  }

  public get startValue() {
    return this.dateOne ?  this.dateOne.format("MMM Do YY") : '-';
  }

  public get endValue() {
    return this.dateTwo ?  this.dateTwo.format("MMM Do YY") : '-';
  }

  public get isSingle() {
    return CalendarTypes[this.type as keyof typeof CalendarTypes] === CalendarTypes.single;
  }
  
}
