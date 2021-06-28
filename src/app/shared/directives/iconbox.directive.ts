// import { AfterContentInit, AfterViewInit, ComponentFactoryResolver, ContentChildren, Directive, ElementRef, QueryList, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
// import { IconboxComponent } from '@shared/_components/iconbox/iconbox.component';

// // @Directive({
// //   selector: '[appIconbox]',
// //   queries: {
// //     // Give this the same name as your local class property on the directive. "myChildren" in this case
// //     myChildren: new ContentChildren('vc'),
// //   },
// // })
// // export class IconboxDirective implements AfterContentInit{
// //   // @ViewChild('vc', {read: ViewContainerRef}) vc!: ViewContainerRef;
// //   private myChildren!: QueryList<'vc'>;
// //   constructor(
// //     private resolver: ComponentFactoryResolver,
// //     public viewContainerRef: ViewContainerRef) { }

// //     ngAfterContentInit() {
// //       console.log(this.viewContainerRef)
// //       // const factory = this.resolver.resolveComponentFactory(IconboxComponent);
// //       // this.vc.createComponent(factory);
// //     }

// // }

// @Directive({
//   selector: '[appIconbox]'
// })
// export class IconboxDirective {
//   constructor(private element: ElementRef,
//     private viewContainerRef: ViewContainerRef,
//     private componentFactoryResolver: ComponentFactoryResolver
//   ) { }

//   ngOnInit() {
//     const componentFactory = this.componentFactoryResolver
//       .resolveComponentFactory(IconboxComponent);

//     const componentRef = this.viewContainerRef.createComponent(componentFactory);

//     const host = this.element.nativeElement
//     console.log(host)
//     console.log(host)
//     host.appendChild(componentRef.location.nativeElement, host)
//   }
// } 
