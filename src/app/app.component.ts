import { Component, OnInit } from '@angular/core';
import { AntSpinnerService } from './common/ant-spinner.service';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import { spinnerstatus } from './common/Store/Selector/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'project_gold';

  constructor(private loaderService: AntSpinnerService) {}

  ngOnInit(): void {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.hide();
    }, 5000);

    window.addEventListener('beforeunload', () => {
      localStorage.clear(); // Clear local storage when user leaves the page
    });
    window.addEventListener('popstate', () => {
      localStorage.clear(); // Clear local storage when user navigates using back/forward button
    });
  }

}
