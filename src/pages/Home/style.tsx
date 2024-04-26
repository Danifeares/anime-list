import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  //align-items: center;
  justify-content: center;
  box-sizing: border-box;
  > div {
    display: flex;
    align-items: baseline;
    color: #748899;
    justify-content: space-between;
    > h1 {
      font-size: 32px;
      text-decoration: underline;
    }
    > span {
      display: flex;
      align-items: center;
      font-size: 16px;
      gap: 6px;
      cursor: pointer;
      transition: 300ms ease;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  > ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    margin: 0;
    padding: 0;
  }
`