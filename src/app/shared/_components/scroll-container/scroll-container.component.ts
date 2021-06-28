import { AfterViewInit, Component, ComponentFactoryResolver, ContentChild, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IconboxComponent } from '../iconbox/iconbox.component';

@Component({
  selector: '[iconbox]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./scroll-container.component.scss'],
  host: {'class': 'component-container'}
})
export class ScrollContainerComponent implements AfterViewInit {
  @Input('iconbox') icon: string | null = null;
  constructor(
    private resolver: ComponentFactoryResolver,
    private el: ElementRef,
    private viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    if(this.icon) {
     this.createIconbox();
    }
  }

  public createIconbox() {
    const factory = this.resolver.resolveComponentFactory(IconboxComponent);
    const componentRef = this.viewContainerRef.createComponent(factory);
    componentRef.instance.icon = this.icon;
    const host = this.el.nativeElement
    host.appendChild(componentRef.location.nativeElement, host)
  }


}
