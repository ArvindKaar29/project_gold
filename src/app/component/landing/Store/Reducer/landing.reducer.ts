import { createReducer, on } from "@ngrx/store";
import { User } from "../Model/user";
import { addUser, addUserSuccess, getToggleValue, getUser, } from "../Action/landing.action";
import { NzButtonType } from "ng-zorro-antd/button";

export const UserFeatureKey = 'user'

export interface landingpageValues{
    toggle_log : string
    buttonType_signin:NzButtonType
    buttonType_signup:NzButtonType
  }

export interface UserState{
    user : User[],
    landvalues : landingpageValues
}

const initialState: UserState = {
    user:[],
    landvalues:{
        toggle_log:'signin',
        buttonType_signin:'primary',
        buttonType_signup:'default'
    }
};

export const userReducer = createReducer(
    initialState,
    on(addUserSuccess,(state,action)=>(
        {
            ...state,
            user:action.data
        }
    )),
    on(getToggleValue, (state , action) =>(
        {
            ...state,
            landvalues:action.toggle
            
        }
    ))
);

export const LandingReducer = userReducer
