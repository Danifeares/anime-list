import { PasswordUser } from "./styles";

type InputPasswordProsp = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputPassword: React.FC<InputPasswordProsp> = ({ onChange }) => {
  return (
    <PasswordUser onChange={onChange} placeholder="Password" type="password" />
  );
};
