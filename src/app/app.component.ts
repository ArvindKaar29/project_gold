import { Component, OnInit } from '@angular/core';
import { AntSpinnerService } from './common/ant-spinner.service';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import { getmessagestatus, spinnerstatus } from './common/Store/Selector/shared.selectors';
import { Message } from './common/Store/Reducer/shared.reducer';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'project_gold';

  constructor(private loaderService: AntSpinnerService, public store: Store<AppState>,private router: Router) { }

  msg$!: Observable<Message>;
  public msg!: Message;
  ngOnInit(): void {
    
    this.loaderService.show();
    this.msg$ = this.store.select(getmessagestatus);

    this.msg$.subscribe((data) => {
      this.msg = data
    })

    setTimeout(() => {
      this.loaderService.hide();
      const message: Message = {
        messagetxt: 'Page Loaded Successfully..',
        messagetype: 'success'
      }
      this.loaderService.msgdisplay(message)
    }, 2000);

    this.localBasedOnWnd();

  }

  localBasedOnWnd() {

    // /---To clear the local while refreshing 

    // window.addEventListener('beforeunload', () => {
    //   // localStorage.clear(); // Clear local storage when user leaves the page
    // });

    window.addEventListener('popstate', () => {
      localStorage.clear(); // Clear local storage when user navigates using back/forward button
    });
    
  }


}
