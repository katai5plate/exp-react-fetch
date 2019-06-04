import InputForm from "../molecules/InputForm";
import Label from "../atoms/Label"

interface Props {
  isLoading?: boolean;
  result?: string;
}

const C: React.FC<Props> = ({ isLoading = false, result = "" }) => (
  <div>
    <InputForm
      label="User Data Finder (UserID)"
      buttonLabel="Search"
      onClickButton={(x) => {
        console.log(x) // FIXME:
      }}
      isLoading={isLoading}
    />
    <Label size="h5">{`UserName is: ${result}`}</Label>
  </div>
)

export default C;