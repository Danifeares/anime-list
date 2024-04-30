import icon from '/favicon.png';
import { Button } from '../Button';
import { Nav } from './style';

export const Navbar = () => {
  return (
    <Nav>
      <div>
        <img src={icon} />
        <h1>Anime List</h1>
      </div>
      <div>
        <Button>Login</Button>
      </div>
    </Nav>
  )
}