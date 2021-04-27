import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../features/auth/auth.module';
import { LoginComponent } from '../features/auth/components/login/login.component';
import { CoreLayoutComponent } from './containers/core-layout/core-layout.component';


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
