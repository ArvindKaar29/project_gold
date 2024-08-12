import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css'],
})
export class BasicDetailsComponent implements OnInit{

  get BasicForm() {
    return this.masterFormGroup.get('BasicForm') as FormGroup;
  }

  masterFormGroup: FormGroup ;
  contactOptions = [
    { value: 'mobile', label: 'Mobile' },
    { value: 'email', label: 'Email' },
    // Add more options here if needed
  ];


  constructor(public controlContainer: ControlContainer) { 
    this.masterFormGroup = this.controlContainer.control as FormGroup;
  }


  async ngOnInit(): Promise<void>{

    console.log("masterForm::::",this.masterFormGroup)

    this.BasicForm.valueChanges.subscribe((val)=>
      console.log(this.BasicForm)
    )
  }


  submitForm(){

  }



  isNumberKey(event: KeyboardEvent): boolean {
    const charCode = event.charCode ? event.charCode : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  OnValidationcheck(value:any, validation_type:String): void {
    this.contactOptions.forEach((type)=>{
    this.BasicForm.get(type.value)?.clearValidators()
    this.BasicForm.get(type.value)?.updateValueAndValidity()
    this.BasicForm.get('country_code')?.clearValidators()
    this.BasicForm.get('country_code')?.updateValueAndValidity()
    })
    if(validation_type == 'contact'){
      value == 'email' ?  this.BasicForm.get(value)?.setValidators([Validators.email, Validators.required]) : this.BasicForm.get(value)?.setValidators([Validators.required,Validators.maxLength(10),Validators.minLength(10)]);
      this.BasicForm.get(value)?.updateValueAndValidity()
      if(value == 'mobile')
      this.BasicForm.get('country_code')?.setValidators([Validators.required])
      this.BasicForm.get('country_code')?.updateValueAndValidity()
    }
  }

}
