import { createAction, props } from "@ngrx/store";
import { User } from "../Model/user";
import { landingpageValues } from "../Reducer/landing.reducer";

export const ValidateUser = createAction('[User] Validate User');
export const getUser = createAction('[User] Get User');
export const addUser = createAction('[User] Add User',(user:User)=>({user}));
export const addUserSuccess = createAction('[User] Add User Success',props<{user:User}>())

export const getToggleValue = createAction('[Landpage] Get Toggle Value',props<{toggle:landingpageValues}>())
