import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTaskRoutingModule } from './user-task-routing.module';
import { UserTaskComponent } from './user-task/user-task.component';
import { NgZorroAntdModule } from 'src/app/common/NgZorroAntd.module';
import { BasicDetailsComponent } from './user-task/basic-details/basic-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserTaskComponent,
    BasicDetailsComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    UserTaskRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserTaskModule { }
