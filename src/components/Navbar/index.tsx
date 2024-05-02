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

  const toHome = () => {
    navigate("/");
  };

  if (isRegisterPage) {
    return null;
  }
  return (
    <Nav>
      <div>
        <img onClick={toHome} src={icon} />
        <h1 onClick={toHome}>Anime List</h1>
      </div>
      <div>
        <Button onClick={toLogin}>SignUp</Button>
      </div>
    </Nav>
  );
};
