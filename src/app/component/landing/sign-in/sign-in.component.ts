import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getToggleValue } from '../Store/Action/landing.action';
import { Store } from '@ngrx/store';
import { landingpageValues } from '../Store/Reducer/landing.reducer';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private fb: FormBuilder,public store:Store,private router: Router,private authService:AuthService) { }

  public validateForm: FormGroup<{
    userName: FormControl;
    password: FormControl;
    remember: FormControl;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

   ErrorMessages = {
    UserNameRequired : 'Username is required.',
    PasswordRequired : 'Password is required.',
  }
  
  // Show and hide the Password
  isPasswordVisible = false;
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }


  submitForm(): void {
    this.validateForm.markAllAsTouched();
    localStorage.setItem('role','admin')
    const auth = this.authService.navigateBasedOnRole();
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    }
  }

  public getErrorMessage(controlName: string): string {
    const control = this.validateForm.get(controlName);
    if (control?.hasError('required') && control.touched) {
      return controlName === 'userName' ? this.ErrorMessages.UserNameRequired : this.ErrorMessages.PasswordRequired;
    }
    // Add more conditions for other validation errors as needed
    return '';
  }
  register(){
    const toggle:landingpageValues={
      toggle_log:'signup',
      buttonType_signin:'default',
      buttonType_signup:'primary'
    }
    this.store.dispatch(getToggleValue({toggle}))
  }
}
