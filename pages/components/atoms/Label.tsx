import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface Props {
  size: TypographyProps["variant"];
  children: string | number;
}

const C: React.FC<Props> = props => {
  const { size: variant, children } = props;
  return (
    <Typography {...{ variant }}>{children}</Typography>
  )
}

export default C;