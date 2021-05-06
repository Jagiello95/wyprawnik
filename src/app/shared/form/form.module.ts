import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ControlErrorComponent } from '@shared/form/control-error.component';
import { ControlErrorsContainerDirective } from '@shared/form/control-errors-container.directive';
import { ControlErrorsDirective } from '@shared/form/control-errors.directive';
import { FormGroupComponent } from '@shared/form/form-group.component';
import { FormSubmitDirective } from '@shared/form/form-submit.directive';
import { InputModule } from '@shared/input';
import { FormOutlineComponent } from './form-outline/form-outline.component';

@NgModule({
  declarations: [
    FormGroupComponent,
    ControlErrorComponent,
    ControlErrorsDirective,
    ControlErrorsContainerDirective,
    FormSubmitDirective,
    FormOutlineComponent,
  ],
  imports: [CommonModule, InputModule, TranslocoModule],
  exports: [
    FormGroupComponent,
    ControlErrorComponent,
    ControlErrorsDirective,
    ControlErrorsContainerDirective,
    FormSubmitDirective,
    FormOutlineComponent
  ],
})
export class FormModule {
}
