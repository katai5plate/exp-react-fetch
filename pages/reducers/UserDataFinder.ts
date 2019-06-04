import { Reducer as ReactReducer } from "react";
import { ActionWithType, ActionWithArgs } from "./types"

enum ActionTypes {
  FETCH_START = "FETCH_START",
  FETCH_FAILD = "FETCH_FAILD",
  FETCH_DONE = "FETCH_DONE",
}

export type Action =
  | ActionWithArgs<ActionTypes.FETCH_START, { value: number }>
  | ActionWithType<ActionTypes.FETCH_FAILD>
  | ActionWithArgs<ActionTypes.FETCH_DONE, { result: string }>

export const actionCreaters = {
  fetchStart: (value: number): Action => ({
    type: ActionTypes.FETCH_START,
    payload: { value },
  }),
  fetchFaild: (): Action => ({
    type: ActionTypes.FETCH_FAILD,
  }),
  fetchDone: (result: string): Action => ({
    type: ActionTypes.FETCH_DONE,
    payload: { result },
  }),
}

export interface State {
  value: string;
  isError: boolean;
  result: string;
  isLoading: boolean;
}

const initialState: State = {
  value: "",
  result: "",
  isLoading: false,
  isError: false,
}

export const Reducer: ReactReducer<State, Action> = (
  state = initialState, action
): State => {
  switch (action.type) {
    case ActionTypes.FETCH_START:
      return {
        ...state,
        isLoading: true,
        result: "...",
      };
    case ActionTypes.FETCH_FAILD:
      return {
        ...state,
        isLoading: false,
        isError: true,
        result: "",
      };
    case ActionTypes.FETCH_DONE:
      return {
        ...state,
        isLoading: false,
        result: action.payload.result,
      };
    default:
      return state;
  }
}