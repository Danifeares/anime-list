import { useNavigate } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList";
import { useGetAnimeList } from "../../hooks/useGetAnimeList";
import { StyledBox } from "./style";
import { Pagination } from "@mui/material";

export const Home = () => {
  const { topAnimes, handlePageChange, page } = useGetAnimeList();
  const navigate = useNavigate();

  const handleAnimeClick = (animeId: number) => {
    navigate(`/aboutanime/${animeId}`);
  };

  return (
    <StyledBox>
      <div>
        <h1>Top Animes</h1>
        <Pagination
          count={10}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
      <ul>
        {topAnimes.data?.map((anime) => (
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
