import InputForm from "../molecules/InputForm";
import Label from "../atoms/Label"

interface Props {
  onClickButton: () => void;
  isLoading: boolean;
}

const C: React.FC<Props> = ({ onClickButton, isLoading }) => (
  <div>
    <InputForm
      label="User Data Finder (UserID)"
      buttonLabel="Search"
      onClickButton={onClickButton}
      isLoading={isLoading}
    />
    <Label size="h5">{`UserName is: `}</Label>
  </div>
)

export default C;