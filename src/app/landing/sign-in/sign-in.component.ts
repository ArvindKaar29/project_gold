import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private fb: FormBuilder) { }

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

}
