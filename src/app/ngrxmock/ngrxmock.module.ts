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
import { ReactiveFormsModule } from '@angular/forms';
import { appReducer } from './model/btnchng';



@NgModule({
  declarations: [
    NgrxMockComponent
  ],
  imports: [
    CommonModule,
    NgrxmockRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('appreducer', appReducer),
    // StoreModule.forFeature('mock_store', Ngrx_Module_Reducer),
  ]
})
export class NgrxmockModule { }
