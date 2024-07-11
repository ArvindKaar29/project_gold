import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser, getToggleValue, getUser } from '../Store/Action/landing.action';
import { User, registerUser } from '../Store/Model/user';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { landingpageValues } from '../Store/Reducer/landing.reducer';
import { AntSpinnerService } from 'src/app/common/ant-spinner.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  validateForm!: FormGroup;


  constructor(public store: Store,private fb: FormBuilder,private loaderservice:AntSpinnerService){}
  user :User = {
    username : '',
    password : '',
    otp : 1
  } 

  public is_admin:string = 'false';

  ngOnInit(){
      // this.store.dispatch(getUser())
      this.validateForm = this.fb.group({
        userName: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]],
        confirm: ['', [Validators.required],[this.confirmValidator]],
        phonenumber: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
        phoneNumberPrefix: ['+91', [Validators.required]],
        isadmin:[false],
        reportee:['',Validators.required]
      });

      // this.validateForm.get('isadmin')?.valueChanges.subscribe((value) => {
      //   this.is_admin = value;
      //   this.onAdminCheckboxChange(value);
      // });
  }

 

  submitForm(): void {
    this.loaderservice.show()
    const registereduser:registerUser = {
      userName: this.validateForm.get('userName')?.value,
      email: this.validateForm.get('email')?.value,
      password: this.validateForm.get('confirm')?.value,
      phonenumber: this.validateForm.get('phoneNumberPrefix')?.value + this.validateForm.get('phonenumber')?.value,
      isadmin: this.validateForm.get('isadmin')?.value,
      reportee: this.validateForm.get('isadmin')?.value == 'admin' ? this.validateForm.get('reportee')?.value : ''
    }
    console.log('submit', registereduser);
    this.store.dispatch(addUser(registereduser))
    // this.validateForm.reset();
    // this.loginForm();
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


onAdminCheckboxChange(checked: boolean): void {
  this.is_admin = String(checked)
  checked == true ? this.validateForm.get('reportee')?.clearValidators() : this.validateForm.get('reportee')?.setValidators([Validators.required])
  this.validateForm.get('reportee')?.updateValueAndValidity()
}


// userNameAsyncValidator: AsyncValidatorFn = (control: AbstractControl) =>
//     new Observable((observer: Observer<ValidationErrors | null>) => {
//       setTimeout(() => {
//         if (control.value === 'JasonWood') {
//           // you have to return `{error: true}` to mark it as an error event
//           observer.next({ error: true, duplicated: true });
//         } else {
//           observer.next(null);
//         }
//         observer.complete();
//       }, 1000);
//     });



}
