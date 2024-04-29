import { EmailUser } from "./styles";

type InputEmailProsp = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputEmail: React.FC<InputEmailProsp> = ({ onChange }) => {
  return <EmailUser onChange={onChange} placeholder="E-mail" />;
};
