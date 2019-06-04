import TextField from '@material-ui/core/TextField';
import React from 'react';
// import { PropTypes } from '@material-ui/core';

interface Props {

}
interface State {
  value: string;
}

class C extends React.Component<Props, State> {
  public state: State = {
    value: "",
  }
  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    })
  }
  public render() {
    return (
      <TextField type="text" value={this.state.value} onChange={this.onChange} />
    )
  }
}

export default C;