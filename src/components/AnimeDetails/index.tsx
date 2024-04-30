import { AboutAnime } from "../../interfaces/IAboutAnimes";

interface Props {
  anime?: AboutAnime;
}

export const AnimeDetails: React.FC<Props> = ({ anime }) => {
  return (
    <div>
      <h1>{anime?.title}</h1>
      <img src={anime?.images.jpg.image_url} alt={anime?.title} />
    </div>
  );
};
