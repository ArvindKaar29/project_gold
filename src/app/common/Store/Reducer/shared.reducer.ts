import { createReducer, on } from '@ngrx/store';
import { spinner } from '../Action/shared.actions';


export const sharedFeatureKey = 'shared';

export interface SharedState {
  spinner:boolean
}

export const initialState: SharedState = {
  spinner: false
};

export const Sharedreducer = createReducer(
  initialState,
  on(spinner,(state,action)=>({
    ...state,
    spinner:action.status
  }))
);

