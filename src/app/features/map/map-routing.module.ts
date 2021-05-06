import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { MapLayoutComponent } from './containers/map-layout/map-layout.component';


const routes: Routes = [
  {
    path: '',
    component: MapLayoutComponent,

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {
}
