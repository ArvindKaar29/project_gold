import { createReducer, on } from '@ngrx/store';
import { message, spinner } from '../Action/shared.actions';


export const sharedFeatureKey = 'shared';

export interface Message{
  messagetxt:string,  
  messagetype:'success' | 'info' | 'warning' | 'error';
}
export interface SharedState {
  spinner:number,
  message:Message
}

export const initialState: SharedState = {
  spinner: 0,
  message:{
    messagetxt:'',
    messagetype:'success'
  }
};

export const Sharedreducer = createReducer(
  initialState,
  on(spinner,(state,action)=>({
    ...state,
    spinner: action.status == 'show' ? state.spinner+1 : state.spinner-1
  })),
  on(message,(state,action)=>({
    ...state,
    message:action.msg
  }))
);

