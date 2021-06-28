import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputEventHandler } from '@shared/_components/input/input-base.model';
import * as moment from 'moment';
import { CalendarService } from '../../_components/calendar-base/calendar-base/calendar.service';

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
  public date: any;
  public calendarTypes = CalendarTypes;

  // public value: moment.Moment | null = moment();

  public active: boolean | null = null;

  // @Input()

  // onChange = (value:any) => {
  //   // if (Array.isArray(value)) {
  //   //   this.dateOne = value[0];
  //   //   this.dateTwo = value[1];
  //   // } else {
  //   //   this.dateOne = value;
  //   //   this.dateTwo = null;
  //   // }

  // };

  // onTouched = () => {};

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
   }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(event:any) {
    if (!Boolean(event.closest('.calendar-container'))) {
      this.active = false;
    }

 }

  ngOnInit(): void {}

  writeValue(date: moment.Moment | moment.Moment[] | null) {
    if (Array.isArray(date)) {
      this.dateOne = date[0];
      this.dateTwo = date[1];
    } else {
      this.dateOne = date;
      this.dateTwo = null;
    }
  }

  propagateChange = (_: any) => {
    // react to blur events etc.
  };

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(onTouched: any) {
    // this.onTouched = onTouched;
  }


  public get startValue() {
    return this.dateOne ?  this.dateOne.format("MMM Do YY") : '';
  }

  public get endValue() {
    return this.dateTwo ?  this.dateTwo.format("MMM Do YY") : '';
  }
  

  public onClick() {
    this.active = true;
  }

  public onSelect(date: moment.Moment | moment.Moment[] | null) {
    console.log(date)
    // this.onChange(date)
    this.propagateChange(date)
    this.writeValue(date)
  }

  @HostBinding('class.is-blurred')
  public get isBlurred(): boolean {
    return this.active === false;
  }
  @HostBinding('class.is-focused')
  public get isFocused(): boolean {
    return this.active === true;
  }

  public get isRange():boolean {
    return this.type === CalendarTypes[CalendarTypes.range]
  }
  
}
