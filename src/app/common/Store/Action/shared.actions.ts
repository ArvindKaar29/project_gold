import { createAction, props } from "@ngrx/store";
import { Message, SharedState } from "../Reducer/shared.reducer";


export const spinner = createAction('Spinner',props<{status:string}>())

export const message =  createAction('Message',props<{msg:Message}>())