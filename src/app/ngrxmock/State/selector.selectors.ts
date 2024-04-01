import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, Btnchng, FormState, appReducer } from '../model/btnchng';

const selectBtnFeature = createFeatureSelector<AppState>('appreducer');

export const  GetBtnValue = createSelector(selectBtnFeature, (state:AppState) => state.btn);
export const  GetFormValue = createSelector(selectBtnFeature, (state: AppState) => state.form.form);

export const GetFormById = createSelector(selectBtnFeature,(state:AppState,props:string)=>{
    return state.form.form.find(form =>
            form.id === +props 
        )
})

