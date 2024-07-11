import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  home:boolean = false;
  about:boolean = false;


  abtbtn():void{
    this.about = true
  }
  public role=''
  isauthentiacte():boolean{
    if (this.about){
      localStorage.setItem('auth','true')
      this.about = false
      return true
    }
    if(localStorage.getItem('role')) return true
    return false
  }
  navigateBasedOnRole(): void {
    const role = localStorage.getItem('role')
    if (role === 'admin') {
      this.router.navigate(['/admin_page']);
    } else if (role === 'user') {
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/landing']); // or any default route
    }
  }

  }
