import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output, Self, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Event } from '@angular/router';
import * as moment from 'moment';
import { __values } from 'tslib';
import { IconboxComponent } from '../iconbox/iconbox.component';
import { InputEventHandler } from './input-base.model';

@Component({
  selector: 'app-input-base, [appInput]',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss'],
})
export class InputBaseComponent implements OnInit{
  @Input('icon') icon: string | null = null;
  @Input('type') type: string | null = null;
  @Input('disabled') disabled: boolean = false;
  @Input('floatLabel') floatLabel: boolean = false;
  @Output() focusEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() blurEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() inputEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() enterEvent: EventEmitter<void> = new EventEmitter<void> ()
  public iconActive: boolean = false;
  private _value: string | null = null;
  private _label: string | null = null;

  @Input()
  increment!: number;

  touched = false;

  
  constructor() {
  }

@Input() public set label(label: string | null) {
  this._label = label;
};

public get label() {
  return this._label;
};

@Input() set value(value: string | null) {
  console.log(value)
    this._value= value;
}

get value(): string | null {
  return this._value;
}

public get placeholder() {
  if (!this.label) {return ''}
  return this.floatLabel ? '' : this.label;
}
  

  ngOnInit(): void {
  }

  public get iconPosition() {
    return this.iconActive ? '0rem' : '-2.5rem'
  }

  public iconChange() {
    this.iconActive = !this.iconActive;
  }

  onBlur() {
    this.blurEvent.emit()
  }

  onFocus() {
    this.focusEvent.emit()
  }

  onInput(event:any) {
    this.inputEvent.emit(event.target.value)
  }

  onEnter() {
    this.enterEvent.emit()
  }
}
