import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { spinnerstatus } from 'src/app/common/Store/Selector/shared.selectors';

@Component({
  selector: 'app-invalid',
  templateUrl: './invalid.component.html',
  styleUrls: ['./invalid.component.css']
})
export class InvalidComponent implements OnInit{
  showloading:Observable<number>;

constructor(public store:Store<AppState>,private router: Router){
  this.showloading = this.store.select(spinnerstatus)
}

ngOnInit(){
  this.pageRefresh400();
}

pageRefresh400() {
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('refresh','true')
  });
  if (localStorage.getItem('refresh') && this.router.url === '/404') {
    this.router.navigate(['/']); // Redirect to the homepage or another page
  }
}

ngAfterViewInit(): void {
  localStorage.removeItem('refresh')
}


}
