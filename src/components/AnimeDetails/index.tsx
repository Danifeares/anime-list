import { AboutAnime } from "../../interfaces/IAboutAnimes";

interface Props {
  anime: AboutAnime;
}

export const AnimeDetails: React.FC<Props> = ({ anime }) => {
  return <h1>{anime.title}</h1>;
};
