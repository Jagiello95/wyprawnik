import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormModule } from '@shared/form';
import { InputModule } from '@shared/input';
import { ButtonModule } from '@shared/button';
import { SidebarModule } from '@shared/sidebar';
import { DropdownModule } from '@shared/dropdown';
import { CheckboxModule } from './checkbox/checkbox.module';
import { CardModule } from './card';
import { CalendarModule } from './calendar';
import { DirectivesModule } from './directives/directives.module';
import { TableModule } from './table/table.module';
import { AutoCompleteModule } from './auto-complete/auto-complete.module';
import { ColorPickerModule } from './color-picker';

const SHARED_MODULES = [
  FormModule,
  InputModule,
  ButtonModule,
  SidebarModule,
  DropdownModule,
  CheckboxModule,
  CardModule,
  CalendarModule,
  DirectivesModule,
  AutoCompleteModule,
  TableModule,
  ColorPickerModule
];

@NgModule({
  imports: [
    CommonModule, HttpClientModule, SHARED_MODULES
  ],
  exports: [
    CommonModule, HttpClientModule, SHARED_MODULES
  ],
  declarations: [
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
