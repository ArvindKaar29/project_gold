import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NzButtonType } from 'ng-zorro-antd/button';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { select_toggle_signincolor, select_toggle_signupcolor, select_toggle_val } from '../Store/selector/user.selectors';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent implements OnInit{
  
  constructor(public authserv:AuthService,public store:Store){}

  @Output() signInClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() signUpClicked: EventEmitter<void> = new EventEmitter<void>();

  buttonType_signin$: Observable<NzButtonType> = new Observable<NzButtonType>;
  buttonType_signup$: Observable<NzButtonType>  = new Observable<NzButtonType>;

  ngOnInit(): void {
    this.buttonType_signin$ = this.store.pipe(select(select_toggle_signincolor));
    this.buttonType_signup$ = this.store.pipe(select(select_toggle_signupcolor));
  }


  onSignInClick(): void {
    this.signInClicked.emit();
    // this.buttonType_signin = 'primary';
    // this.buttonType_signup = 'default';
  }

  onSignUpClick(): void {
    this.signUpClicked.emit();
    // this.buttonType_signin = 'default';
    // this.buttonType_signup = 'primary';
  }

  onAboutClick(){
    this.authserv.abtbtn()
  }

  onHomeClick(){
    this.authserv.homebtn()
  }

}
