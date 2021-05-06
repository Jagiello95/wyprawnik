import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquadTemplateComponent } from './components/squad-template/squad-template.component';
import { SquadComponent } from './components/squad/squad.component';
import { SquadLayoutComponent } from './containers/squad-layout/squad-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SquadLayoutComponent,
    children: [
      {
        component: SquadTemplateComponent,
        path: 'new',
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SquadRoutingModule {
}
