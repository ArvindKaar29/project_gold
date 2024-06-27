import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from 'src/app/auth/auth.guard';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {
      path: 'ngrx_mock',
      loadChildren: () => import('../../ngrxmock/ngrxmock.module').then(m => m.NgrxmockModule),
      canActivate: [AuthGuard]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LandingRoutingModule { }