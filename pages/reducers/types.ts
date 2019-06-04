// import { Action } from "redux";
// export type ActionTypeCreator<T extends string, Extra extends {} = {}> = Action<T> & { [K in keyof Extra]: Extra[K] }

export interface ActionWithType<T> {
  type: T;
}
export interface ActionWithArgs<T, P> {
  type: T;
  payload: P;
}
