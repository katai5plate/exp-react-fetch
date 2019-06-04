import { Action } from "redux";
export type ActionTypeCreator<T extends string, Extra extends {} = {}> = Action<T> & { [K in keyof Extra]: Extra[K] }