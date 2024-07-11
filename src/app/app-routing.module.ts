import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },  
  {
    path: 'landing',
    loadChildren: () => import('../app/component/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'admin_page',
    loadChildren: () => import('../app/component/Home/admin/admin.module').then(m => m.AdminModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('../app/component/invalid/invalid.module').then(m => m.InvalidModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
