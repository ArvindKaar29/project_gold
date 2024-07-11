import { createAction, props } from "@ngrx/store";
import { SharedState } from "../Reducer/shared.reducer";


export const spinner = createAction('Spinner',props<{status:boolean}>())