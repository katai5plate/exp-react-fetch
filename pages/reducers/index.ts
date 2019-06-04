import { Reducer as UserDataFinderReducer, State as UserDataFinderState, Action as UserDataFinderAction } from "./UserDataFinder";
import { combineReducers, Action } from "redux";

export type States
  = UserDataFinderState
// | で区切る

export type Actions
  = UserDataFinderAction
  | Action

export const reducers = combineReducers({
  ...UserDataFinderReducer,
})