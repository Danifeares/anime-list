import { styled } from "@mui/material";

export const ListItem = styled('li')`
  display: flex;
  flex-direction: column;
  color: #748899;
  font-size: 18px;
  width: 210px;
  gap: 6px;
`

export const ContainerImg = styled('div')`
  position: relative;
  transition: 300ms ease;
  width: 210px;
  height: 310px;
  cursor: pointer;
  > img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  > div {
    position: absolute;
    padding: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none; 
    opacity: 1; 
    color: white;
    font-size: 24px;
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
`