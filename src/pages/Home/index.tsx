import { AnimeList } from "../../components/AnimeList";
import { StyledBox } from "./style";
import { useEffect, useState } from "react";
import { http } from "../../http";
import { ITopAnimes } from "../../interfaces/ITopAnimes";
import { Pagination } from "@mui/material";

export const Home = () => {

  const [topAnimes, setTopAnimes] = useState<ITopAnimes>({});
  const [page, setPage] = useState(1)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    http.get<ITopAnimes>(`/top/anime?limit=10&page=${page}`)
      .then(res => setTopAnimes(res.data))
  }, [page]);

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