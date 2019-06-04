import { connect } from "react-redux";

import UserDataFinder, { StateProps, DispatchProps } from "../components/organisms/UserDataFinder";
import { actionCreaters } from "../reducers/UserDataFinder";

import { State } from '../reducers';
import { Action, Dispatch } from "redux";

const mapStateToProps = (state: State): StateProps => ({
  ...state,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  fetchUserData: (id) => {
    dispatch(actionCreaters.fetchStart(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDataFinder)





