import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  
  constructor() { }

  public buildCalendar(value: any) {
    const startDate = value.clone().startOf('month').startOf('week')
    const endDate = value.clone().endOf('month').endOf('week')

    const calendar = []
    const day = startDate.clone().subtract(1, 'day')
    
    while(day.isBefore(endDate, "day")) {
      calendar.push(
        Array(7).fill(0).map(()=> day.add(1, "day").clone())
      )
    }
    return calendar;
  }

  public isSelected(day: any, value: any) {
    return value ? value.isSame(day, "day") : false;
  }

  public beforeToday(day: any) {
    return day.isBefore(new Date(), "day")
  }

  public isToday(day:any) {
    return day.isSame(new Date(), "day")
  }

  public isInRange(day: any, day2: any, day3: any) {
    return day.isBetween(day2, day3, 'days', '[]');
  }

  public isAfter(day: any, day2:any) {
    console.log(day2.isAfter(day))
    return day2.isAfter(day)
  }

  public dayStyles(day: any, value: any, value2:any) {
    if (this.beforeToday(day)) return "before"
    if (this.isSelected(day, value)) return "selected selected-start"
    if (this.isSelected(day, value2)) return "selected selected-end"
    if(this.isInRange(day, value, value2)) return "selected"

    if (this.isToday(day)) return "today"
    return ""
  }
}
