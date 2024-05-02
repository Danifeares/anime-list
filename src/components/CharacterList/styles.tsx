import styled from "styled-components";

export const CharactersItem = styled.div`
  flex-basis: calc(100% / 6 - 20px);
  margin: 10px;
`;

export const CharacterImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  > div {
    position: absolute;
    padding: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none; 
    opacity: 1; 
    color: white;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    transition: opacity 300ms ease;
    background-color: rgba(84, 79, 79, 0.7);
    border-radius: 16px;
  }
  &:hover {
    transform: scale(1.05);
    filter: grayscale(100%);
    > div {
      display: block;
    }
  }
`;

export const CharacterImg = styled.img`
  width: 70px;
`;

export const CharacterName = styled.h2`
  font-size: 13px;
  text-align: center;
`;

export const CharctersRole = styled.p``;

export const ModalIsOpen = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`