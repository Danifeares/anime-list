import { useEffect, useState } from "react";
import { http } from "../http";
import { ITopAnimes } from "../interfaces/ITopAnimes";

export const useGetAnimeList = () => {
  const [topAnimes, setTopAnimes] = useState<ITopAnimes>({});
  const [page, setPage] = useState(1);
  const [inputAnime, setInputAnime] = useState('')
  const [animeFinded, setAnimeFinded] = useState<ITopAnimes>({})

  const handlePageChange = (
    _: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    if (inputAnime) {
      http.get(`anime?q=${inputAnime}&limit=10&page=${page}`)
        .then((res) => setAnimeFinded(res.data))
        .catch((error) => console.error("Erro ao pesquisar anime:", error));
    } else {
      http.get<ITopAnimes>(`/top/anime?limit=10&page=${page}`)
        .then((res) => setTopAnimes(res.data))
        .catch((error) => console.error("Erro ao buscar lista de animes:", error));
    }
  }, [page, inputAnime]);

  return {
    listOfAnimes: inputAnime ? animeFinded : topAnimes,
    handlePageChange,
    page,
    setInputAnime,
    inputAnime
  };
};