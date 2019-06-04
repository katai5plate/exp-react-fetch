import React from 'react';

import Button from "../atoms/Button";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";

interface Props {
  label: string;
  buttonLabel: string;
  onClickButton: (value: number) => void;
  isLoading: boolean;
}
interface State {
  value: number;
}

class C extends React.Component<Props, State> {
  state: State = {
    value: 0,
  }
  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: Number(e.target.value),
    })
  }
  render() {
    const { label, buttonLabel, onClickButton, isLoading } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Label size="h6">{label}</Label>
        <InputText type="number" value={value} onChange={this.onChangeInput} />
        <Button color="primary" onClick={() => onClickButton(this.state.value)} isDisabled={isLoading}>{buttonLabel}</Button>
      </div>
    )
  }
}

export default C;