import styled from "styled-components";

export const AnimeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
`;

export const AnimeHead = styled.div`
  width: 100%;
  height: 180px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 580px;
    gap: 0;
    padding: 16px;
  }
`;

export const AnimeImage = styled.img`
  width: 140px;
  height: 214px;
  position: relative;
`;

export const AnimeTitle = styled.h1`
  font-size: 24px;
  color: #748899;
  margin: 0;
`;

export const AnimeSynops = styled.p`
  font-size: 10px;
  color: #748899;
  margin: 0;
  width: 100%;
  max-height: 100px;
  overflow: auto;
  box-sizing: border-box;
`;

export const AnimeTitleAndSinops = styled.div``;

export const AnimeImageAndButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
  margin-left: 30px;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

export const AnimeButton = styled.button`
  width: 112px;
  height: 30px;
  background-color: #04d9d9;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #0eb1b1;
  }
`;

export const AnimeButtonsSelect = styled.div`
  display: flex;
  gap: 10px;
`;

export const AnimeSelect = styled.button`
  width: 80px;
  height: 20px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  color: #748899;
  cursor: pointer;
  &:hover {
    background-color: #e4dada;
  }
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 60%;
    height: 70%;
  }
`;

export const Characters = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: end;
`;
export const ModalButton = styled.button`
  width: fit-content;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Trailer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimeInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
    > p {
      display: none;
    }
  }
`;

export const AnimeInformations = styled.span`
  font-size: 14px;
  color: #748899;
`;
