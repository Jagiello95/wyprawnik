import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ComponentsModule } from '@shared/_components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRowDirective } from './directives/edit-row.directive';
import { CancelEditRowDirective } from './directives/cancel-edit-row.directive';
import { EditableRowDirective } from './directives/editable-row.directive';
import { TableRowComponent } from './table-row/table-row.component';
import { AcceptEditRowDirective } from './directives/accept-row.directive';
import { InputModule } from '@shared/input';
import { CheckboxModule } from '@shared/checkbox'
import { DropdownModule } from '@shared/dropdown';
import { ButtonModule } from '@shared/button';
import { ColorPickerModule } from '@shared/color-picker';



@NgModule({
  declarations: [
    TableComponent,
    EditRowDirective,
    CancelEditRowDirective,
    EditableRowDirective,
    TableRowComponent,
    AcceptEditRowDirective
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    InputModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    ColorPickerModule
  ],
  exports: [
    TableComponent,
    EditRowDirective,
    CancelEditRowDirective,
    AcceptEditRowDirective,
    EditableRowDirective,
  ]
})
export class TableModule { }
