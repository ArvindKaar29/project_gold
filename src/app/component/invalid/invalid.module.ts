import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvalidRoutingModule } from './invalid-routing.module';
import { InvalidComponent } from './invalid/invalid.component';


@NgModule({
  declarations: [
    InvalidComponent
  ],
  imports: [
    CommonModule,
    InvalidRoutingModule
  ]
})
export class InvalidModule { }
