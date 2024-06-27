import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserFeatureKey, UserState } from '../Reducer/landing.reducer';

export const selectLandState = createFeatureSelector <UserState>(
    'landingreducer'
)

export const selectUser = createSelector(
    selectLandState,
    (state)=>state.user
)

export const select_toggle_val = createSelector(
    selectLandState,
    (state)=>state.landvalues.toggle_log
)
export const select_toggle_signincolor = createSelector(
    selectLandState,
    (state)=>state.landvalues.buttonType_signin
)
export const select_toggle_signupcolor = createSelector(
    selectLandState,
    (state)=>state.landvalues.buttonType_signup
)