import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  home:boolean = false;
  about:boolean = false;

  homebtn():void{
    this.home = true
  }

  abtbtn():void{
    this.about = true
  }

  isauthentiacte():boolean{
    if (this.home){
      localStorage.setItem('auth','true')
      this.home = false
      return true
    }
    if (this.about){
      localStorage.setItem('auth','true')
      this.about = false
      return true
    }
    return false
  }
}
