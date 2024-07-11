import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { spinner } from './Store/Action/shared.actions';
import { spinnerstatus } from './Store/Selector/shared.selectors';

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
    this.store.dispatch(spinner({status:true}))
  }

  hide(): void {
    this.isLoading.next(false);
    this.store.dispatch(spinner({status:false}))
  }

  isLoading$ = this.isLoading.asObservable();
}
