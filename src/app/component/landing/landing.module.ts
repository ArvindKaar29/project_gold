import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LandingReducer } from './Store/Reducer/landing.reducer';
import { NgZorroAntdModule } from 'src/app/common/NgZorroAntd.module';



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
    StoreModule.forFeature('landingreducer', LandingReducer),
  ]
})
export class LandingModule { }
