import { AnimeList } from "../../components/AnimeList";
import { useGetAnimeList } from "../../hooks/useGetAnimeList";
import { StyledBox } from "./style";
import { Pagination } from "@mui/material";

export const Home = () => {
  const { topAnimes, handlePageChange, page } = useGetAnimeList();

  return (
    <StyledBox>
      <div>
        <h1>Top Animes</h1>
        <Pagination count={10} page={page} onChange={handlePageChange} color="primary" />
      </div>
      <ul>
        {topAnimes.data?.map((anime, i) => (
          <AnimeList
            key={i}
            anime={anime}
          />
        ))}
      </ul>
    </StyledBox>
  )
}