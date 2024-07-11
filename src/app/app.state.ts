import { SharedState, Sharedreducer } from "./common/Store/Reducer/shared.reducer";

export interface AppState {
    sharedreducer: SharedState
  }
  
  export const appReducer = {
    sharedreducer: Sharedreducer
  };