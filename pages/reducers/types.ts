export interface ActionWithType<T> {
  type: T;
}
export interface ActionWithArgs<T, P> {
  type: T;
  payload: P;
}
