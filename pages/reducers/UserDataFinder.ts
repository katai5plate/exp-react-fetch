// import { createActions, handleActions } from "redux-actions";
import { ActionTypeCreator } from "./types"
import { Reducer as ReactReducer } from "react";

enum actionTypes {
  FETCH_START = "FETCH_START",
  FETCH_FAILD = "FETCH_FAILD",
  FETCH_DONE = "FETCH_DONE",
}

export type Action =
  | ActionTypeCreator<actionTypes.FETCH_START, { value: number }>
  | ActionTypeCreator<actionTypes.FETCH_FAILD, { error: string }>
  | ActionTypeCreator<actionTypes.FETCH_DONE, { result: string }>

export const actionCreaters = {
  fetchStart: (id: number): Action => ({
    type: actionTypes.FETCH_START,
    value: id,
  }),
  fetchFaild: (error: string): Action => ({
    type: actionTypes.FETCH_FAILD,
    error,
  }),
  fetchDone: (result: string): Action => ({
    type: actionTypes.FETCH_DONE,
    result,
  }),
}

export interface State {
  value: string;
  result: string;
  isLoading: boolean;
}

export const Reducer: ReactReducer<State, Action> = (state: State = {
  value: "",
  result: "",
  isLoading: false,
}, action: Action): State => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_FAILD:
      return {
        ...state,
        result: "ERROR!",
      };
    case actionTypes.FETCH_DONE:
      return {
        ...state,
        isLoading: false,
        result: action.result,
      };
    default:
      return state;
  }
}

export default Reducer;