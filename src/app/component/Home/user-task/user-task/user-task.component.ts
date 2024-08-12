import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/Interface/slide_content.interface';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css']
})

export class UserTaskComponent implements OnInit{

  get MasterFormGroup() {
    return this.mastForm as FormGroup;
  }

  get BasicForm(){
    return this.mastForm.get('BasicForm') as FormGroup;
  }

  mastForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.mastForm = new FormGroup({});
  }

  async ngOnInit(): Promise<void>{
    this.initFormGroup();
    this.UpdateStepHeader();
    this.MasterFormGroup.valueChanges.subscribe((newVal)=>{
      this.UpdateStepHeader();
    });
  }

  initFormGroup(): void {
    this.mastForm = new FormGroup({
      BasicForm: this.fb.group({
        subject: ['', [Validators.required]],
        request_type: ['', Validators.required],
        issue_on: ['', [Validators.required]],
        service_type: ['', Validators.required],
        cc: ['', Validators.required],
        contact_type: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        country_code : ['', Validators.required]
      }),
    });
  }

  steps: Step[] = [
    {
      id: 1,
      title: 'Basic Details',
      description: `This step is to enter basic infofrmation.`,
      status:'process',
      percentage: null
    },
    {
      id: 2,
      title: `Step 2`,
      description: `This step is asynchronous.`,
      status:'wait',
      percentage: 45
    },
    {
      id: 3,
      title: `Step 3`,
      description: `This step is asynchronous.`,
      status:'wait',
      percentage: 100
    }
  ];

  current = 0;

  

  onIndexChange(current: number): void {
    if(this.current === 0 && this.BasicForm.valid){
    this.current = current;
    this.UpdateStepHeader();
    }
    else if(this.current >= current ){
    this.current = current;
    this.UpdateStepHeader();
    }
  }

  pre(): void {
    this.current -= 1;
    this.UpdateStepHeader();
  }

  next(): void {
    this.current += 1;
    this.UpdateStepHeader();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        
        break;
      }
      case 1: {
        
        break;
      }
      case 2: {
        
        break;
      }
    }
  }

  UpdateStepHeader(){
    this.steps.forEach((step)=>{
      if(step.id == 1){
        step.percentage = this.getFormCompletionPercentage(this.BasicForm);
        step.percentage == 0 ? step.status = 'wait' : step.percentage == 100 ? step.status = 'finish' : step.status = 'process';
      }
      if(step.id == 2){
        step.percentage = this.getFormCompletionPercentage();
        step.percentage == 0 ? step.status = 'wait' : step.percentage == 100 ? step.status = 'finish' : step.status = 'process';
      }
      if(step.id == 3){
        step.percentage = this.getFormCompletionPercentage();
        step.percentage == 0 ? step.status = 'wait' : step.percentage == 100 ? step.status = 'finish' : step.status = 'process';
      }
    })
  }

  getFormCompletionPercentage(form?:any): number {
   if(form){
    const controls = form.controls;
    const totalControls = Object.keys(controls).length;
    let validControls = 0;

    for (const key in controls) {
      if (controls[key].valid) {
        validControls++;
      }
    }

    return Math.round((validControls / totalControls) * 100);
   }
   return 0;
  }


}
