import React, { useState } from "react";
import { Button } from "../../components/Button";
import { InputName } from "../../components/InputName";
import { InputEmail } from "../../components/InputEmail/InputEmail";
import { InputPassword } from "../../components/InputPassword";
import { Container, InformationDiv, LoginContainer, Title } from "./styles";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  password: string;
  email: string;
}

export const Register = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      email: email,
    }));
  };

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      name: name,
    }));
  };

  const handleUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      password: password,
    }));
  };

  const saveUserData = (userData: UserData): void => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const toSite = () => {
    saveUserData(userData);
    navigate("/");
  };

  return (
    <Container>
      <LoginContainer>
        <Title>Register</Title>
        <InformationDiv>
          <InputEmail onChange={handleUserEmail} />
          <InputName onChange={handleUserName} />
          <InputPassword onChange={handleUserPassword} />
          <Button onClick={toSite}>Sing In</Button>
        </InformationDiv>
      </LoginContainer>
    </Container>
  );
};
