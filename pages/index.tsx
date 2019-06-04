import { Provider } from 'react-redux';
import Store from './store';
import UserDataFinder from "./containers/UserDataFinder";

export default () => (
  <Provider store={Store}>
    <UserDataFinder onClickButton={() => { }} />
  </Provider>
)