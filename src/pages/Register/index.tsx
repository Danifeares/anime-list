import React, { useState } from "react";
import { Button } from "../../components/Button";
import { InputName } from "../../components/InputName";
import { InputEmail } from "../../components/InputEmail/InputEmail";
import { InputPassword } from "../../components/InputPassword";
import { Container, InformationDiv, LoginContainer, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

interface UserData {
  name: string;
  password: string;
  email: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
  });

  const handleUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setUserData({
      ...userData,
      email: email,
    });
  };

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setUserData({
      ...userData,
      name: name,
    });
  };

  const handleUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setUserData({
      ...userData,
      password: password,
    });
  };

  const toSite = () => {
    const newUser = {
      id: "",
      favoriteAnimes: [],
      ...userData,
    };

    setUser(newUser);

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
          <Button onClick={toSite}>
            <p>Sign In</p>
          </Button>
        </InformationDiv>
      </LoginContainer>
    </Container>
  );
};
