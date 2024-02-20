import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';



export const btnchng1 = createAction('btnchng1');
export const btnchng2 = createAction('btnchng2');
export const btnchng3 = createAction('btnchng3');

export const inputval = createAction('inputval',props<{val:string}>())