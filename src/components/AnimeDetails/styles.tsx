import styled from "styled-components";

export const AnimeContainer = styled.div`
  width: 100%;
  height: 100px;
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
`;

export const AnimeTitleAndSinops = styled.div``;

export const AnimeImageAndButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
  margin-left: 30px;
  align-items: center;
  gap: 13px;
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
`;
