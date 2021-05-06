import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { FormGroupComponent } from '../form-group.component';

@Component({
  selector: 'app-form-outline',
  template: `
  <div>
  <div class="outline-head">
  <div class="spacer outline-icon"></div>
  <i *ngIf="valid" class="{{head}} outline-icon"></i>
  <span class="outline-icon" *ngIf="!valid">{{head}}</span>
  </div>
  
  <ng-content></ng-content>
  </div>`,
  styleUrls: ['./form-outline.component.scss']
})
export class FormOutlineComponent implements OnInit, AfterViewInit {
  @ContentChildren(FormGroupComponent) content!: any;
  @Input() icon!: string;
  @Input() label!:string;
  constructor(private translateService: TranslocoService) { }

  ngOnInit(): void {
  }

  public get valid() {
    return Array.from(this.content).every((elem: any)=> elem.valid)
  }

  public get head() {
      if (this.valid) {
        return 'pi pi-check'
      }
      return this.label
  }

  @HostBinding('class.outline-valid')
  public get classOutlineValid(): boolean {
    return this.valid;
  }

  @HostBinding('class.outline') outline = true;

  ngAfterViewInit(): void {
    this.translateService.selectTranslate(this.label).subscribe((el: string) => (this.label = el));
  }
  }
