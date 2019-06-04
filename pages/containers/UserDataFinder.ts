import { connect } from "react-redux";

import UserDataFinder from "../components/organisms/UserDataFinder";
import { actionCreaters } from "../reducers/UserDataFinder";

import { States, Actions } from '../reducers';
import { Dispatch } from "redux";

export default connect(
  (state: States) => ({
    ...state,
  }),
  (dispatch: Dispatch<Actions>) => ({
    fetchUserData: (id: number) => {
      dispatch(actionCreaters.fetchStart(id))
    },
  }),
)(UserDataFinder)





