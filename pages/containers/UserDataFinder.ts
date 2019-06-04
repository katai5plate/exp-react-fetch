import { connect } from "react-redux";

import UserDataFinder from "../components/organisms/UserDataFinder";
import { actionCreaters } from "../reducers/UserDataFinder";

import { State } from '../reducers';
import { Action, Dispatch } from "redux";

export default connect(
  (state: State) => ({
    ...state,
  }),
  (dispatch: Dispatch<Action>) => ({
    fetchUserData: (id: number) => {
      dispatch(actionCreaters.fetchStart(id))
    },
  }),
)(UserDataFinder)





