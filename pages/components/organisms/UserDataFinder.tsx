import InputForm from "../molecules/InputForm";
import Label from "../atoms/Label"
import { State, Action } from "../../reducers/UserDataFinder";

interface OwnProps {
  isLoading?: boolean;
  result?: string;
}
type Props = OwnProps & State;

const C: React.FC<Props> = ({ isLoading = false, result = "", fetchUserData }) => (
  <div>
    <InputForm
      label="User Data Finder (UserID)"
      buttonLabel="Search"
      onClickButton={() => { fetchUserData() }}
      isLoading={isLoading}
    />
    <Label size="h5">{`UserName is: ${result}`}</Label>
  </div>
)

export default C;