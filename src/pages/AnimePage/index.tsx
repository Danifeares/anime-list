import { useEffect, useState } from "react";
import { AnimeDetails } from "../../components/AnimeDetails";
import { IAboutAnime } from "../../interfaces/IAboutAnimes";
import { http } from "../../http";
import { useParams } from "react-router-dom";
import aboutImg from "../../assets/images/about anime .png";
import { AboutContainer, AboutImage } from "./styles";

export const AnimePage = () => {
  const [anime, setAnime] = useState<IAboutAnime>({});
  const params = useParams();

  useEffect(() => {
    http
      .get<IAboutAnime>(`/anime/${params.id}`)
      .then((res) => setAnime(res.data));
  }, []);

  return (
    <AboutContainer>
      <AboutImage src={aboutImg} alt="imagem about anime" />
      <AnimeDetails anime={anime?.data} />
    </AboutContainer>
  );
};
