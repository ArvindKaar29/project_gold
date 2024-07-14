import { Component, OnInit } from '@angular/core';
import { spinnerstatus } from '../Store/Selector/shared.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-purespinner',
  templateUrl: './purespinner.component.html',
  styleUrls: ['./purespinner.component.css']
})
export class PurespinnerComponent implements OnInit{

  showloading:Observable<number> | undefined;


constructor(public store:Store<AppState>){
}

ngOnInit(): void {
  this.showloading = this.store.select(spinnerstatus)
}
}
