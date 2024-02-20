import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxmockRoutingModule } from './ngrxmock-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxMockComponent } from './ngrx-mock/ngrx-mock.component';
import { Btnreducer, ngrxMockFeatureKey } from './State/Reducer/ngrx-mock.reducer';
import { NgZorroAntdModule } from '../common/NgZorroAntd.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgrxMockComponent
  ],
  imports: [
    CommonModule,
    NgrxmockRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    StoreModule.forFeature('btnstore', Btnreducer)
    // isDevMode() ? StoreDevtoolsModule.instrument() : []
  ]
})
export class NgrxmockModule { }
