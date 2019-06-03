import Button from "../atoms/Button";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";

interface Props {
  label: string;
  buttonLabel: string;
  onClickButton: () => void;
  isLoading: boolean;
}

const C: React.FC<Props> = ({ label, buttonLabel, onClickButton, isLoading }) => (
  <div>
    <Label size="h6">{label}</Label>
    <InputText />
    <Button color="primary" onClick={onClickButton} isDisabled={isLoading}>{buttonLabel}</Button>
  </div>
)

export default C;