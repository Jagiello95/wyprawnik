import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from './map.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { MapRoutingModule } from './map-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapLayoutComponent } from './containers/map-layout/map-layout.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    MapLayoutComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MapRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MapService],
})
export class MapModule { }
