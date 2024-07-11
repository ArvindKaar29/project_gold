import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { SharedState } from '../Reducer/shared.reducer';


const selectsharedfeature = createFeatureSelector<SharedState>('sharedreducer');


export const spinnerstatus = createSelector(selectsharedfeature,(state)=>{
    return state.spinner
})

export const getmessagestatus = createSelector(selectsharedfeature,(state:SharedState)=>
     state.message
)