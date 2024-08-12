import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [  
  {
    path: '',
    loadChildren: () => import('../app/component/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: '404',
    loadChildren: () => import('../app/component/invalid/invalid.module').then(m => m.InvalidModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
