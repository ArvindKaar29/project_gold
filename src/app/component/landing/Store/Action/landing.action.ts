import { createAction, props } from "@ngrx/store";
import { User, registerUser } from "../Model/user";
import { landingpageValues } from "../Reducer/landing.reducer";

export const ValidateUser = createAction('[User] Validate User');
export const getUser = createAction('[User] Get User');

//For Registration 
export const addUser = createAction('[User] Add User',(user:registerUser)=>({user}));
export const addUserSuccess = createAction('[User] Add User Success',props<{data:any}>())

export const getToggleValue = createAction('[Landpage] Get Toggle Value',props<{toggle:landingpageValues}>())
