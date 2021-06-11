import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { FormGroupComponent } from '../form-group.component';

@Component({
  selector: 'app-form-icon',
  template: `
<div class="d-flex flex-nowrap" >
  <ng-content></ng-content>
       
  <div class="input-scroll-container" *ngIf="icon">
    <div class="input-icon-container" [style.bottom]="iconPosition" (click)="iconChange()">
      <div class="input-icon">
        <i [class]="icon"></i>
      </div>
      <div class="input-icon">
        <i class="pi pi-times"></i>
      </div>
    </div>
  </div>
</div>`
})
export class FormIconComponent implements OnInit, AfterViewInit {
  value!: string;
  @Input('icon') icon: string | null = null;
  public iconActive: boolean = false;
  public filled: boolean = false;

  constructor(private translateService: TranslocoService) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {

  }

  public get iconPosition() {
    return this.iconActive ? '0rem' : '-2.5rem'
  }

  public iconChange() {
    this.iconActive = !this.iconActive;
  }
  }
