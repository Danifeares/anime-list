import { useLocation, useNavigate } from "react-router-dom";
import icon from "/favicon.png";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Button } from "../Button";
import { Nav } from "./style";
import { useUser } from "../../hooks/UserContext";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const isRegisterPage = location.pathname === "/signup";

  const toLogin = () => {
    navigate("/signup");
  };

  const toHome = () => {
    navigate("/");
  };

  const toUserList = () => {
    navigate("/userlist");
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
        <Button onClick={toUserList}>
          <ListAltIcon />
        </Button>
        {user ? (
          <Button onClick={logout}>
            <p>Logout</p>
          </Button>
        ) : (
          <Button onClick={toLogin}>
            <p>SignUp</p>
          </Button>
        )}
      </div>
    </Nav>
  );
};
