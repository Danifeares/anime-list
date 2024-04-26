import icon from '/favicon.png';
import { InputAdornment, TextField } from "@mui/material";
import { Button } from '../Button';
import SearchIcon from '@mui/icons-material/Search';
import { Nav } from './style';

export const Navbar = () => {
  return (
    <Nav>
      <div>
        <img src={icon} />
        <h1>Anime List</h1>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label='Pesquisar'
          variant="filled"
          size='small'
          fullWidth
          focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button>Login</Button>
      </div>
    </Nav>
  )
}