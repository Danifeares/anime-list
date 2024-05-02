import styled from "styled-components";

export const Container = styled.div`
  background-color: #aee8e8;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  background-color: #1c7fa6;
  width: 80%;
  height: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: white;
  text-transform: uppercase;
`;

export const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
`;

export const ImageUse = styled.img`
  background-color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
