import TextField from '@material-ui/core/TextField';
import React from 'react';

interface Props {
  type: HTMLInputElement["type"];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const C: React.FC<Props> = props => {
  const { type, value, onChange } = props;
  return (
    <TextField {...{ type, value, onChange }} />
  )
}

export default C;