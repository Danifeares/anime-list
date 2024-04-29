import { useLocation, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

import icon from "/favicon.png";
import { Button } from "../Button";
import { Nav } from "./style";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegisterPage = location.pathname === "/signup";

  const toLogin = () => {
    navigate("/signup");
  };

  if (isRegisterPage) {
    return null;
  }
  return (
    <Nav>
      <div>
        <img src={icon} />
        <h1>Anime List</h1>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Pesquisar"
          variant="filled"
          size="small"
          fullWidth
          focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={toLogin}>SignUp</Button>
      </div>
    </Nav>
  );
};
