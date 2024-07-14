import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { message, spinner } from './Store/Action/shared.actions';
import { spinnerstatus } from './Store/Selector/shared.selectors';
import { Message } from './Store/Reducer/shared.reducer';

@Injectable({
  providedIn: 'root'
})
export class AntSpinnerService {
  

  constructor( public store:Store<AppState>) { 
  }
  private isLoading = new BehaviorSubject<boolean>(false);
  showloading:Observable<boolean> | undefined;


  show(): void {
    this.isLoading.next(true);
    this.store.dispatch(spinner({status:'show'}))
  }

  hide(): void {
    this.isLoading.next(false);
    this.store.dispatch(spinner({status:'hide'}))
  }

  msgdisplay(msg:Message):void {
    this.store.dispatch(message({msg:msg}))
    setTimeout(() => {
      const msg2:Message={
        messagetxt:'',
        messagetype:'success'
      }
      this.store.dispatch(message({msg:msg2}))
    }, 1500);
  }

  isLoading$ = this.isLoading.asObservable();
}
