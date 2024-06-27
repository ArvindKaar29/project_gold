import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser, getToggleValue, getUser } from '../Store/Action/landing.action';
import { User } from '../Store/Model/user';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { landingpageValues } from '../Store/Reducer/landing.reducer';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  validateForm!: FormGroup;


  constructor(public store: Store,private fb: FormBuilder){}
  user :User = {
    username : '',
    password : '',
    otp : 1
  } 

  ngOnInit(){
      this.store.dispatch(getUser())
      // this.store.dispatch(addUser(this.user))
      this.validateForm = this.fb.group({
        userName: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]],
        confirm: ['', [Validators.required],[this.confirmValidator]],
        phonenumber: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
        phoneNumberPrefix: ['+91', [Validators.required]]
      });
  }

 

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.validateForm.reset();
    this.loginForm();
  }

  loginForm(){
    const toggle:landingpageValues={
      toggle_log:'signin',
      buttonType_signin:'primary',
      buttonType_signup:'default'
    }
    this.store.dispatch(getToggleValue({toggle}))
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }

  isPasswordVisible = false;
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls['confirm'].updateValueAndValidity());
  }

  confirmValidator: AsyncValidatorFn = (control: AbstractControl) => 
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
    if (!control.value) {
      observer.next ({ error: true, required: true });
    } else if (control.value !== this.validateForm.controls['password'].value) {
      observer.next ({ confirm: true, error: true });
    }else{
      observer.next(null);
    }
    observer.complete();
  }, 1000);
});

isNumberKey(event: KeyboardEvent): boolean {
  const charCode = event.charCode ? event.charCode : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  }
  return true;
}
// confirmValidator: ValidatorFn = (control: AbstractControl) => {
//   if (!control.value) {
//     return { error: true, required: true };
//   } else if (control.value !== this.validateForm.controls.password.value) {
//     return { confirm: true, error: true };
//   }
//   return {};
// };
}
