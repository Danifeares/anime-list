import React from "react";
import { AboutAnime } from "../../interfaces/IAboutAnimes";
import {
  AnimeContainer,
  AnimeHead,
  AnimeImage,
  AnimeTitle,
  AnimeSynops,
  AnimeTitleAndSinops,
  AnimeImageAndButton,
  AnimeButton,
} from "./styles";
import { Icon } from "@mui/material";

interface Props {
  anime?: AboutAnime;
}

export const AnimeDetails: React.FC<Props> = ({ anime }) => {
  return (
    <AnimeContainer>
      <AnimeHead>
        <AnimeImageAndButton>
          <AnimeImage src={anime?.images.jpg.image_url} />
          <AnimeButton>
            Favoritar<Icon color="primary">add_circle</Icon>
          </AnimeButton>
        </AnimeImageAndButton>
        <AnimeTitleAndSinops>
          <AnimeTitle>{anime?.title}</AnimeTitle>
          <AnimeSynops>{anime?.synopsis}</AnimeSynops>
        </AnimeTitleAndSinops>
      </AnimeHead>
    </AnimeContainer>
  );
};
