import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NgZorroAntdModule } from '../common/NgZorroAntd.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    LandingPageComponent,
    LandingNavbarComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
  ]
})
export class LandingModule { }
