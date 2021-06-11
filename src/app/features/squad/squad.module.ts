import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadLayoutComponent } from './containers/squad-layout/squad-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquadRoutingModule } from './squad-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SquadComponent } from './components/squad/squad.component';
import { SquadTemplateComponent } from './components/squad-template/squad-template.component';
import { NewSquadComponent } from './components/new-squad/new-squad.component';



@NgModule({
  declarations: [
    SquadLayoutComponent,
    SquadComponent,
    SquadTemplateComponent,
    NewSquadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SquadRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SquadModule { }
