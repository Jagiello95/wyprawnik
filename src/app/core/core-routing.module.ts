import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '@features/dashboard/dashboard.module';
import { AuthModule } from '../features/auth/auth.module';
import { LoginComponent } from '../features/auth/components/login/login.component';
import { MapModule } from '../features/map/map.module';
import { ProfileModule } from '../features/profile/profile.module';
import { SquadModule } from '../features/squad/squad.module';
import { CoreLayoutComponent } from './containers/core-layout/core-layout.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: CoreLayoutComponent,
    // canActivate: [ContextGuard],
    // canActivateChild: [ContextGuard],
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../features/auth/auth.module').then((m: { AuthModule: AuthModule }) => m.AuthModule),
        
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../features/dashboard/dashboard.module').then((m: {DashboardModule: DashboardModule }) => m.DashboardModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'squad',
        loadChildren: () => import('../features/squad/squad.module').then((m: {SquadModule: SquadModule }) => m.SquadModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'map',
        loadChildren: () => import('../features/map/map.module').then((m: {MapModule: MapModule }) => m.MapModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../features/profile/profile.module').then((m: {ProfileModule: ProfileModule }) => m.ProfileModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      }
    ],
    
  },
  {
    path: '**',
    pathMatch: 'full',
    component: LoginComponent,
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
