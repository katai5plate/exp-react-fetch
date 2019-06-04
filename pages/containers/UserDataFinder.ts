import { connect } from "react-redux";

import UserDataFinder, { StateProps, DispatchProps } from "../components/organisms/UserDataFinder";
import { actionCreaters } from "../reducers/UserDataFinder";

import { State } from '../reducers';
import { Action, Dispatch } from "redux";

import axios from 'axios';

const mapStateToProps = (state: State): StateProps => {
  const { isLoading } = state.UserDataFinder;
  console.log({ state })
  return {
    ...state,
    isLoading,
  }
}

const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    fetchUserData: async (id) => {
      dispatch(actionCreaters.fetchStart(id))
      // await wait(3000);
      const response = await axios.get("http://localhost:3332/user/111", { responseType: "json" });
      // const { data } = response;
      console.log({ response })
      dispatch(actionCreaters.fetchFaild())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDataFinder)





