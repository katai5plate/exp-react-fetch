import TextField from '@material-ui/core/TextField';
import React from 'react';

interface Props {
  type: HTMLInputElement["type"];
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
    const { onChange } = this;
    const { type } = this.props;
    const { value } = this.state;
    return (
      <TextField {...{ type, value, onChange }} />
    )
  }
}

export default C;