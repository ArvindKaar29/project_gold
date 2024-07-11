import { createReducer, on } from '@ngrx/store';
import { message, spinner } from '../Action/shared.actions';


export const sharedFeatureKey = 'shared';

export interface Message{
  messagetxt:string,  
  messagetype:'success' | 'info' | 'warning' | 'error';
}
export interface SharedState {
  spinner:boolean,
  message:Message
}

export const initialState: SharedState = {
  spinner: false,
  message:{
    messagetxt:'',
    messagetype:'success'
  }
};

export const Sharedreducer = createReducer(
  initialState,
  on(spinner,(state,action)=>({
    ...state,
    spinner:action.status
  })),
  on(message,(state,action)=>({
    ...state,
    message:action.msg
  }))
);

