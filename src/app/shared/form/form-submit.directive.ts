import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { markAsTouched } from '@shared/form/functions';
import { fromEvent } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'form, form[formGroup], div[formGroup]',
})
export class FormSubmitDirective implements AfterViewInit {
  @Input() public formGroup!: FormGroup;
  public submit$ = fromEvent(this.element, 'submit').pipe(
    tap(() => {
      markAsTouched(this.formGroup);
      if (!this.element.classList.contains('ng-submitted')) {
        this.element.classList.add('ng-submitted');
      }

      const previousSibling = this.element.previousElementSibling;
      if (previousSibling !== null && previousSibling.nodeName.toLowerCase() === 'p-notification') {
        const previousSiblingList = previousSibling.querySelector('ul');
        if (previousSiblingList) {
          const childCount = previousSiblingList.childElementCount;
          if (childCount > 1) {
            for (let i = 0; i < childCount - 1; i++) {
              const li = previousSiblingList.querySelector('li');
              if (li) {
                previousSiblingList.removeChild(li);
              }
            }
          }
        }
      }
    }),
    shareReplay(1),
  );

  constructor(private readonly host: ElementRef<HTMLFormElement>) {
  }


  @HostBinding('class.is-valid')
  public get classValid(): boolean {
    return this.isFormValid;
  }
  public get element(): HTMLFormElement {
    return this.host.nativeElement;
  }

  public get isFormValid(): boolean {
    return this.formGroup?.valid
  }

  ngAfterViewInit() {
    console.log(this.formGroup.valid)
  }

  
}
