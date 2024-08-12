import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { UserTaskComponent } from '../Home/user-task/user-task/user-task.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {
      path: 'ngrx_mock',
      loadChildren: () => import('../../ngrxmock/ngrxmock.module').then(m => m.NgrxmockModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'admin_page',
      loadChildren: () => import('../Home/admin/admin.module').then(m => m.AdminModule),
      canActivate:[AuthGuard]
    },
    {
      path:'user_page',
      loadChildren:()=>import('../Home/user-task/user-task.module').then(m=>m.UserTaskModule),
      canActivate:[AuthGuard]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LandingRoutingModule { }