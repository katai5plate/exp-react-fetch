import { Provider } from 'react-redux';
import Store from './store';
import UserDataFinder from "./containers/UserDataFinder";
// import UserDataFinder from "./components/organisms/UserDataFinder";

export default () => (
  <Provider store={Store}>
    <UserDataFinder />
  </Provider>
)