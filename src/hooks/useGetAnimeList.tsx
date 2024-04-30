import { useEffect, useState } from "react";
import { http } from "../http";
import { ITopAnimes } from "../interfaces/ITopAnimes";

export const useGetAnimeList = () => {
  const [topAnimes, setTopAnimes] = useState<ITopAnimes>({});
  const [page, setPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    http
      .get<ITopAnimes>(`/top/anime?limit=10&page=${page}`)
      .then((res) => setTopAnimes(res.data));
  }, [page]);

  return {
    topAnimes,
    handlePageChange,
    page,
  };
};
