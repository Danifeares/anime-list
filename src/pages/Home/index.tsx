import { useNavigate } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList";
import { useGetAnimeList } from "../../hooks/useGetAnimeList";
import { StyledBox } from "./style";
import { InputAdornment, Pagination, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

export const Home = () => {
  const [inputText, setInputText] = useState('');
  const { listOfAnimes, handlePageChange, page, setInputAnime } = useGetAnimeList();
  const navigate = useNavigate();

  const handleAnimeClick = (animeId: number) => {
    navigate(`/aboutanime/${animeId}`);
  };

  const filtredUniqueAnimes: { [x: number]: boolean } = {};

  const filtredAnimes = listOfAnimes.data?.filter(item => {
    if (filtredUniqueAnimes.hasOwnProperty(item.mal_id)) {
      return false;
    }
    filtredUniqueAnimes[item.mal_id] = true;
    return true
  })

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInputAnime(inputText);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputText]);

  return (
    <StyledBox>
      <div>
        <TextField
          id="outlined-basic"
          label='Pesquisar'
          variant="filled"
          size='small'
          value={inputText}
          onChange={(event) => setInputText(event?.target.value)}
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
        {filtredAnimes?.map((anime) => (
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
