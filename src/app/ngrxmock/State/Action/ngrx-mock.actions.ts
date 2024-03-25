import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Btnchng, FormData } from '../../model/btnchng';
import { Btnreducer } from '../Reducer/ngrx-mock.reducer';
import { formreducer } from '../Reducer/forms-post.reducer';

export const btnchng1 = createAction('btnchng1');
export const btnchng2 = createAction('btnchng2');
export const btnchng3 = createAction('btnchng3');

export const inputval = createAction('inputval',props<{val:string}>())

export const formSub = createAction('formData',props<{formData:FormData}>())