import { Button } from "../../components/Button";
import {
  Container,
  ImageContainer,
  ImageUse,
  InformationDiv,
  LoginContainer,
  NameUser,
  Title,
} from "./styles";

import naruto from "../../assets/naruto-perfil.png";
import goku from "../../assets/goku-perfil.png";
import luffy from "../../assets/luffy-perfil.png";
import sakura from "../../assets/sakura-perfil.png";
import nami from "../../assets/nami-perfil.png";
import bulma from "../../assets/bulma-perfil.png";

export const Login = () => {
  const handleUserName = (e) => {};
  return (
    <Container>
      <LoginContainer>
        <Title>Register</Title>
        <InformationDiv>
          <ImageContainer>
            <ImageUse src={naruto} alt="imagem do personagem do naruto" />
            <ImageUse src={goku} alt="imagem do personagem do goku" />
            <ImageUse src={luffy} alt="imagem do personagem do luffy" />
            <ImageUse src={sakura} alt="imagem do personagem da sakura" />
            <ImageUse src={bulma} alt="imagem do personagem da bulma" />
            <ImageUse src={nami} alt="imagem do personagem da nami" />
          </ImageContainer>
          <NameUser
            placeholder="digite seu nome..."
            onChange={handleUserName}
          />
          <Button>Sing Up</Button>
        </InformationDiv>
      </LoginContainer>
    </Container>
  );
};
