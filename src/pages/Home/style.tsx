import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 48px;
  justify-content: center;
  box-sizing: border-box;
  color: #748899;
  gap: 24px;
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
  }
  > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    > div {
      flex-direction: column;
      margin: 16px 0;
      align-items: center;
      gap: 16px;
    }
    > ul {
      justify-content: center;
    }
  }
`