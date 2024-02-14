import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {
      path: 'ngrx_mock',
      loadChildren: () => import('../ngrxmock/ngrxmock.module').then(m => m.NgrxmockModule)
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LandingRoutingModule { }