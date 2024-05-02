import { styled } from "@mui/material";

export const Nav = styled("nav")`
  background-color: #1c7fa6;
  height: 65px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 2px 16px;
    color: #fff;
  }
  > div:first-of-type {
    gap: 10px;
    width: 240px;
    > img {
      height: 60px;
      width: 60px;
    }
  }
  > div:last-of-type {
    gap: 16px;
    width: 400px;
  }
`;
