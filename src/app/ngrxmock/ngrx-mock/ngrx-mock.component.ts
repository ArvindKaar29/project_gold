import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { btnchng1, btnchng2, formSub, inputval } from '../State/Action/ngrx-mock.actions';
import { Alias, AppState, Btnchng, FormData } from '../model/btnchng';
import { Observable, filter, map } from 'rxjs';
import { FormArray, Validators,FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { GetBtnValue, GetFormValue } from '../State/selector.selectors';
@Component({
  selector: 'app-ngrx-mock',
  templateUrl: './ngrx-mock.component.html',
  styleUrls: ['./ngrx-mock.component.css']
})
export class NgrxMockComponent implements OnInit {

  btnvalue1$: Observable<number> | undefined;
  btnvalue2$: Observable<Btnchng> = new Observable<Btnchng>();
  value:string = ''
  formValue$: Observable<FormData[]> = new Observable<FormData[]>();


  constructor(public store: Store,private formBuilder: FormBuilder) { }

  profileForm:FormGroup = new FormGroup({})

  ngOnInit() {

    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      address:this.createAddressGroup(),
      aliases: new FormArray([
        this.createAliasFormGroup()
      ])
    });

    // this.btnvalue1$ = this.store.pipe(select('appreducer'));
    this.btnvalue2$ = this.store.select(GetBtnValue);
    this.formValue$ = this.store.select(GetFormValue)
    this.formValue$.subscribe(data=>{
      console.log(data)
    })
  }

  isLoadingOne: boolean = false
  isLoadingTwo: boolean  = false;

  createAddressGroup():FormGroup{
    return new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    })
  }

  createAliasFormGroup(): FormGroup {
    return new FormGroup({
      val1: new FormControl(''),
      val2: new FormControl('')
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.group({
      val1: [''], 
      val2: ['']  
    }));
  }  

  loadOne() {
    this.isLoadingOne = true;
      setTimeout(() => {
        this.store.dispatch(btnchng1());
        this.isLoadingOne = false;
      }, 1000);
  }
  loadTwo(){
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.store.dispatch(btnchng2());
      this.isLoadingTwo = false;
    }, 1000);
  }

  onAdd(){
    this.store.dispatch(inputval({val:this.value}))
  }

  onSubmit(){
    console.log(typeof(this.profileForm.value.firstName))
    const post: FormData = this.profileForm.value;
  //   const post: FormData = {
  //     firstName: this.profileForm.value.firstName,
  //     lastName: this.profileForm.value.lastName,
  //     address: {
  //       street: this.profileForm.value.address.street,
  //       city: this.profileForm.value.address.city 
  //     },
  //     aliases:(this.profileForm.value.aliases ).map((alias:Alias) => ({
  //       val1: alias.val1,
  //       val2: alias.val2
  //     }))
  // };  
  this.store.dispatch(formSub({ formData: post }));
  }
}
