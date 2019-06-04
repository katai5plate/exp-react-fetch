import Button from '@material-ui/core/Button';
import { PropTypes } from '@material-ui/core';

interface Props {
  children: string;
  color: PropTypes.Color;
  onClick: () => void;
  isDisabled?: boolean;
}

const C: React.FC<Props> = props => {
  const { children, color, onClick, isDisabled = false } = props;
  return (
    <Button variant="contained" color={color} onClick={onClick} disabled={isDisabled}>
      {children}
    </Button>
  )
}

export default C;