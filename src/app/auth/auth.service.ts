import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { registerUser } from '../component/landing/Store/Model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private http:HttpClient) { }

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

  signUp(user:registerUser): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/data',user
    );
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      case 'Not Found':
        return 'Server Not Found';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }

  }
