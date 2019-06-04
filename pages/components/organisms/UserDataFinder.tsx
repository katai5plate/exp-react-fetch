import InputForm from "../molecules/InputForm";
import Label from "../atoms/Label"

interface OwnProps {
  isLoading?: boolean;
  result?: string;
}
export interface StateProps { }
export interface DispatchProps {
  fetchUserData: (id: number) => void;
}
type Props = OwnProps & DispatchProps;

const C: React.FC<Props> = props => {
  const { isLoading = false, result = "", fetchUserData } = props;
  return (
    <div>
      <InputForm
        label="User Data Finder (UserID)"
        buttonLabel="Search"
        onClickButton={(value) => {
          fetchUserData(value)
        }}
        isLoading={isLoading}
      />
      <Label size="h5">{`UserName is: ${result}`}</Label>
    </div>
  )
}

export default C;