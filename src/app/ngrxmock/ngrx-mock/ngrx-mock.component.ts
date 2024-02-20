import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { btnchng1, btnchng2, inputval } from '../State/Action/ngrx-mock.actions';
import { Btnchng } from '../State/model/btnchng';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-ngrx-mock',
  templateUrl: './ngrx-mock.component.html',
  styleUrls: ['./ngrx-mock.component.css']
})
export class NgrxMockComponent implements OnInit {

  btnvalue1$: Observable<number> | undefined;
  btnvalue2$: Observable<Btnchng> | undefined;
  value:string = ''
  constructor(public store: Store<{ btnstore: Btnchng }>) { }

  ngOnInit() {
    this.btnvalue1$ = this.store.pipe(select('btnstore'),map(data => data.value));
    this.btnvalue2$ = this.store.select('btnstore');
  }

  isLoadingOne: boolean = false
  isLoadingTwo: boolean  = false;

  loadOne() {
    this.isLoadingOne = true;
      setTimeout(() => {
        this.store.dispatch(btnchng1());
        this.isLoadingOne = false;
      }, 1000);
  }
  loadTwo(){
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.store.dispatch(btnchng2());
      this.isLoadingTwo = false;
    }, 1000);
  }

  onAdd(){
    this.store.dispatch(inputval({val:this.value}))
  }
}
