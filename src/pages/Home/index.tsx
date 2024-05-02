import { useNavigate } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList";
import { useGetAnimeList } from "../../hooks/useGetAnimeList";
import { StyledBox } from "./style";
import { InputAdornment, Pagination, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Home = () => {
  const { listOfAnimes, handlePageChange, page, setInputAnime } = useGetAnimeList();
  const navigate = useNavigate();

  const handleAnimeClick = (animeId: number) => {
    navigate(`/aboutanime/${animeId}`);
  };

  return (
    <StyledBox>
      <div>
        <TextField
          id="outlined-basic"
          label='Pesquisar'
          variant="filled"
          size='small'
          onChange={(event) => setTimeout(() => setInputAnime(event?.target.value), 500)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
        />
        <Pagination
          count={10}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>

      <ul>
        {listOfAnimes.data?.map((anime) => (
          <AnimeList
            key={anime.mal_id}
            anime={anime}
            onClick={() => handleAnimeClick(anime.mal_id)}
          />
        ))}
      </ul>
    </StyledBox>
  );
};
