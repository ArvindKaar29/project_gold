import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserFeatureKey, UserState } from '../Reducer/landing.reducer';

export const selectUserState = createFeatureSelector <UserState>(
    UserFeatureKey
)

export const selectUser = createSelector(
    selectUserState,
    (state:UserState)=>state.user
)