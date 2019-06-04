import { connect } from "react-redux";

import UserDataFinder, { StateProps, DispatchProps } from "../components/organisms/UserDataFinder";
import { actionCreaters } from "../reducers/UserDataFinder";

import { State } from '../reducers';
import { Action, Dispatch } from "redux";

import axios from 'axios';

const mapStateToProps = (state: State): StateProps => {
  const { isLoading, result } = state.UserDataFinder;
  return {
    ...state,
    isLoading,
    result,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    fetchUserData: async (id) => {
      dispatch(actionCreaters.fetchStart(id))
      try {
        const response = await axios.get(`http://localhost:3332/user/${id}`, { responseType: "json" });
        const { username } = response.data.res;
        dispatch(actionCreaters.fetchDone(username))
      } catch (e) {
        const { error } = e.response.data;
        alert(error);
        dispatch(actionCreaters.fetchFaild())
      }
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDataFinder)





