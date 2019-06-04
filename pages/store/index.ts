import { createStore, applyMiddleware, Action, Store } from 'redux'
import { reducers, State } from '../reducers';
import logger from 'redux-logger'

const store: Store<State, Action> = createStore(
  reducers,
  applyMiddleware(logger)
)

export default store