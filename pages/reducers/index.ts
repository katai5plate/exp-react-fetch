import {
  Reducer as UserDataFinderReducer,
  State as UserDataFinderState,
  // Action as UserDataFinderAction
} from "./UserDataFinder";
import { combineReducers, Reducer } from "redux";

export interface State {
  UserDataFinder: UserDataFinderState;
}

export const reducers: Reducer<State> = combineReducers({
  UserDataFinder: UserDataFinderReducer
} as any)
