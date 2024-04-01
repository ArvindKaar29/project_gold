import { Component, EventEmitter, Output } from '@angular/core';
import { NzButtonType } from 'ng-zorro-antd/button';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent {
  
  constructor(public authserv:AuthService){}

  @Output() signInClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() signUpClicked: EventEmitter<void> = new EventEmitter<void>();


  buttonType_signin: NzButtonType = 'primary';
  buttonType_signup: NzButtonType = 'default';

  onSignInClick(): void {
    this.signInClicked.emit();
    this.buttonType_signin = 'primary';
    this.buttonType_signup = 'default';
  }

  onSignUpClick(): void {
    this.signUpClicked.emit();
    this.buttonType_signin = 'default';
    this.buttonType_signup = 'primary';
  }

  onAboutClick(){
    this.authserv.abtbtn()
  }

  onHomeClick(){
    this.authserv.homebtn()
  }

}
