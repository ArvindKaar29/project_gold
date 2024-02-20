import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxMockComponent } from './ngrx-mock/ngrx-mock.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxMockComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxmockRoutingModule { }
