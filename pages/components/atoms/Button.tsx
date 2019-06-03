import Button from '@material-ui/core/Button';
import { PropTypes } from '@material-ui/core';

interface Props {
  children: React.ReactChildren | string;
  color: PropTypes.Color;
  onClick: () => void;
  isDisabled?: boolean;
}

const C: React.FC<Props> = ({ children, color, onClick, isDisabled = false }) => (
  <Button variant="contained" color={color} onClick={onClick} disabled={isDisabled}>
    {children}
  </Button>
)

export default C;