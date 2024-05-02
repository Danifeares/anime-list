import React from "react";
import { NameUser } from "./styles";

type InputNameProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputName: React.FC<InputNameProps> = ({ onChange }) => {
  return <NameUser onChange={onChange} placeholder="Digite seu nome..." />;
};
