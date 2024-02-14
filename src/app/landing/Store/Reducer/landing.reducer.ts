import { createReducer, on } from "@ngrx/store";
import { User } from "../Model/user";
import { addUser, getUser } from "../Action/landing.action";

export const UserFeatureKey = 'user'

export interface UserState{
    user : User[]
}

const initialState: UserState = {
    user:[]
};

export const userReducer = createReducer(
    initialState,
    on(getUser, (state) =>(
        {
            ...state,
        })),
    on(addUser,(state,{user})=>(
        {
            ...state,
            user:[...state.user,user]
        }
    ))
);
