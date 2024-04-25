import styled from "styled-components"
import icon from '/favicon.png';
import { Button, TextField } from "@mui/material";

const Nav = styled.nav`
  background-color: #1C7FA6;
  height: 60px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    > img {
      height: 60px;
      width: 60px;
    }
  }
`

export const Navbar = () => {
  return (
    <Nav>
      <div>
        <img src={icon} />
        <h1>Anime List</h1>
      </div>
      <div>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Button variant="outlined">Login</Button>
      </div>
    </Nav>
  )
}