import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputEventHandler } from '@shared/_components/input/input-base.model';
import * as moment from 'moment';
import { CalendarService } from './calendar.service';

enum CalendarTypes {
  single,
  range
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.scss'],
})

export class CalendarComponent implements OnInit, ControlValueAccessor, InputEventHandler {
  @Input() type: string = CalendarTypes[CalendarTypes.single];
  @Input('icon') icon: string | null = null;
  @Input('label') label: string | null = null;
  public dateOne: moment.Moment | null = moment();
  public dateTwo: any | null = null;
  public placeholderOne: string | null = null;
  public placeholderTwo: string | null = null;
  public arrowLeft = String.fromCharCode(171)
  public arrowRight = String.fromCharCode(187)
  public calendar: any[] = [];
  public dayNames: string[] = ["s", "m", "t", "w", "t", "f", "s"]
  // public value: moment.Moment | null = moment();
  public startDate = this.dateOne?.clone().startOf('month').startOf('week')
  public endDate = this.dateOne?.clone().endOf('month').endOf('week')
  public active: boolean | null = null;
  isDropAllowed = (dragData: any) => {
    console.log(dragData)
  }
  @Input()
  increment!: number;

  onChange = (value:any) => {};

  onTouched = () => {};

  constructor(private calendarService: CalendarService, public ngControl: NgControl) {
    ngControl.valueAccessor = this;
   }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(event:any) {
    if (!Boolean(event.closest('.calendar-container'))) {
      this.active = false;
    }
 
 }


  ngOnInit(): void {
    console.log(this.dateOne)
   this.calendar = this.calendarService.buildCalendar(this.dateOne)
    
  }

  public change() {
    this.calendar = []
  }

  public onDayClick(day: any) {
    if (this.calendarService.isSelected(day, this.dateOne)) {
      console.log('same')
      this.dateOne = null
      this.dateTwo = null
      this.onChange(this.dateOne)
    }
    else if(this.dateOne && this.type === "range" && this.calendarService.isAfter(this.dateOne, day)) {
      this.placeholderTwo = this.dateTwo && this.dateTwo.format("MMM Do YY");
      this.dateTwo=day;
      // this.dateTwo = day;
      this.onChange([this.dateOne, this.dateTwo])
      setTimeout(()=> {  this.placeholderTwo = null}, 800)
    }
    
     else {
      // this.dateOne = day;
      this.placeholderOne = this.dateOne && this.dateOne.format("MMM Do YY");;
      // this.placeholderOne = day.format("MMM Do YY");
      this.dateOne=day;
      this.onChange(day)
      setTimeout(()=> { this.placeholderOne = null}, 800)
    }


  }

  public styles(day:any) {
    return this.calendarService.dayStyles(day, this.dateOne, this.dateTwo)
  }

  public currMonthName() {
    return moment().format("MMMM")
  }

  public currYear(){
    return moment().format('YYYY')
  }

  public beforeToday(day:any) {
    return this.calendarService.beforeToday(day)
  }

  public get currMonth() {
    return this.dateOne?.isSame(new Date(), 'month')
  }

  public prevMonth() {
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

  writeValue(quantity: moment.Moment) {
    if (quantity) {
      this.dateOne = quantity;
    }

  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
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

  public get placeholderStartValue() {
    if (this.ngControl.touched) {
      return this.placeholderOne ? this.placeholderOne : this.startValue;
    } else {
      return null
    }
  }

  public get placeholderEndValue() {
    if (this.ngControl.touched) {
      return this.placeholderTwo ? this.placeholderTwo : this.endValue;
    } else {
      return null
    }
  }

  public get iconHandler() {
    if(! this.ngControl.touched) {
      return "-5rem"
    } else if (this.ngControl.status === "VALID" && this.dateTwo) {
      return "0rem"

    } else {
      return "-2.5rem"
    }
  
  }
  

  public onClick() {
    this.active = true;
  }

  @HostBinding('class.is-blurred')
  public get isBlurred(): boolean {
    return this.active === false;
  }
  @HostBinding('class.is-focused')
  public get isFocused(): boolean {
    return this.active === true;
  }

  public get isSingle() {
    return CalendarTypes[this.type as keyof typeof CalendarTypes] === CalendarTypes.single;
  }
  



}
