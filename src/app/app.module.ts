import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './common/NgZorroAntd.module';
import { AntSpinnerComponent } from './common/ant-spinner/ant-spinner.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { PurespinnerComponent } from './common/purespinner/purespinner.component';
import { appReducer } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { AlertComponent } from './common/alert/alert.component';
import { LandingModule } from './component/landing/landing.module';
import { InvalidModule } from './component/invalid/invalid.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AntSpinnerComponent,
    PurespinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LandingModule,
    InvalidModule,
    NgZorroAntdModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly:true,
    })
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
