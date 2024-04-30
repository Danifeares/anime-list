import { useEffect, useState } from "react";
import { AnimeDetails } from "../../components/AnimeDetails";
import { IAboutAnime } from "../../interfaces/IAboutAnimes";
import { http } from "../../http";
import { useParams } from "react-router-dom";

export const AnimePage = () => {
  const [anime, setAnime] = useState<IAboutAnime>({});
  const params = useParams();

  useEffect(() => {
    http
      .get<IAboutAnime>(`/anime/${params.id}`)
      .then((res) => setAnime(res.data));
  }, []);

  return <AnimeDetails anime={anime?.data} />;
};
