import { createReducer, on } from '@ngrx/store';
import {  FormState } from '../../model/btnchng';
import { formSub } from '../Action/ngrx-mock.actions';


export const formsPostFeatureKey = 'formsPost';


export const initialState: FormState = {
  form:[
    {
      id:0,
      firstName: '',
      lastName: '',
      address:  { street: '', city: '' },
      aliases: []
    }
  ]
};

export const formreducer = createReducer(
  initialState,
  on(formSub,(state,action)=>{
    
    let olddata = {...state.form[0]}

    let data = {...action.formData}
    data.id = state.form.length;
    let newdata = {...action.formData}
    newdata.id = state.form.length+1;
    console.log(state.form.length,state)
    const updatedForm = olddata.id === 0 ? [data] : [...state.form,newdata];
    return{
      ...state,
      form:updatedForm
    }
  })
);

