import { createReducer, on } from '@ngrx/store';
import { Btnchng } from '../model/btnchng';
import { btnchng1, btnchng2, inputval } from '../Action/ngrx-mock.actions';


export const ngrxMockFeatureKey = 'ngrxMock';


export const initialState: Btnchng = {
  value: 7,
  value1:'Arvind',
  input1:''
};

export const Btnreducer = createReducer(
  initialState,
  on(btnchng1,state=>(
    {
      ...state,
      value : state.value+1
    }
  )),
  on(btnchng2,(state)=>(
    {
      ...state,
      value1 : state.value1 === 'Arvind' ? 'Roshini' : 'Arvind'
    }
  )),
  on(inputval,(state , action)=>(
    {
      ...state,
      value1 : action.val
    }
  ))
);

