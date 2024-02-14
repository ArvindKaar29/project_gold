import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser, getUser } from '../Store/Action/landing.action';
import { User } from '../Store/Model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  constructor(public store: Store){}
  user :User = {
    username : '',
    password : '',
    otp : 1
  } 

  ngOnInit(){
      this.store.dispatch(getUser())
      this.store.dispatch(addUser(this.user))
  }

}
