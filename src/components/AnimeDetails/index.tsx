import React, { useEffect, useState } from "react";
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
  AnimeButtonsSelect,
  AnimeSelect,
  ModalContainer,
  Characters,
  ModalButton,
} from "./styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { CharacterList } from "../CharacterList";
import { http } from "../../http";
import { useParams } from "react-router-dom";

interface Props {
  anime?: AboutAnime;
}

export const AnimeDetails: React.FC<Props> = ({ anime }) => {
  const [openModalCharters, setOpenModalCharacters] = useState(false);
  const [charactersList, setCharactersList] = useState<any[]>([]);
  const params = useParams();

  useEffect(() => {
    http
      .get(`/anime/${params.id}/characters`)
      .then((res) => {
        setCharactersList(res.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar personagens:", error);
      });
  }, []);

  const handleOpenModal = (numModal: number) => {
    if (numModal === 2) {
      setOpenModalCharacters(true);
    }
  };

  const handleCloseModal = (numModal: number) => {
    if (numModal === 2) {
      setOpenModalCharacters(false);
    }
  };

  return (
    <AnimeContainer>
      <AnimeHead>
        <AnimeImageAndButton>
          <AnimeImage src={anime?.images.jpg.image_url} />
          <AnimeButton>
            Favorite
            <FavoriteIcon fontSize="small" />
          </AnimeButton>
        </AnimeImageAndButton>
        <AnimeTitleAndSinops>
          <AnimeTitle>{anime?.title}</AnimeTitle>
          <AnimeSynops>{anime?.synopsis}</AnimeSynops>
        </AnimeTitleAndSinops>
      </AnimeHead>
      <AnimeButtonsSelect>
        <AnimeSelect onClick={() => handleOpenModal(1)}>Trailer</AnimeSelect>
        <AnimeSelect onClick={() => handleOpenModal(2)}>Characters</AnimeSelect>
        <AnimeSelect onClick={() => handleOpenModal(3)}>Staff</AnimeSelect>
      </AnimeButtonsSelect>
      {openModalCharters && (
        <ModalContainer>
          <ModalButton
            onClick={() => handleCloseModal(2)}
            className="close-button"
          >
            X
          </ModalButton>
          <Characters>
            {Array.isArray(charactersList?.data) &&
              charactersList.data.map((character, index) => {
                return <CharacterList key={index} characters={character} />;
              })}
          </Characters>
        </ModalContainer>
      )}
    </AnimeContainer>
  );
};
