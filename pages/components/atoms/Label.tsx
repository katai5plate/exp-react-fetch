import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface Props {
  size: TypographyProps["variant"];
  children: string | number;
}

const C: React.FC<Props> = ({ size, children }) => (
  <Typography variant={size}>{children}</Typography>
)

export default C;