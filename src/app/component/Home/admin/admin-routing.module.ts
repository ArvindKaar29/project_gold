import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignTaskComponent } from './admin-dashboard/assign-task/assign-task.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
