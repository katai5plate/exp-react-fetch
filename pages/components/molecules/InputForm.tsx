import Button from "../atoms/Button";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";

interface Props {
  label: string;
  buttonLabel: string;
  onClickButton: () => void;
  isLoading: boolean;
}

const C: React.FC<Props> = props => {
  const { label, buttonLabel, onClickButton, isLoading } = props;
  return (
  <div>
    <Label size="h6">{label}</Label>
    <InputText type="number" />
    <Button color="primary" onClick={onClickButton} isDisabled={isLoading}>{buttonLabel}</Button>
  </div>
)}

export default C;