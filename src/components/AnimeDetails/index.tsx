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
  Trailer,
} from "./styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { CharacterList } from "../CharacterList";
import { http } from "../../http";
import { useParams } from "react-router-dom";
import { ICharactersList } from "../../interfaces/ICharactersList";
import { VideoPlayer } from "../VideoPlayer";

interface Props {
  anime?: AboutAnime;
}

export const AnimeDetails: React.FC<Props> = ({ anime }) => {
  const [openModalTrailer, setOpenModalTrailer] = useState(false);
  const [openModalCharters, setOpenModalCharacters] = useState(false);
  const [openModalStaff, setOpenModalStaff] = useState(false);

  const [charactersList, setCharactersList] = useState<ICharactersList>();
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
    switch (numModal) {
      case 1:
        setOpenModalTrailer(true);
        setOpenModalCharacters(false);
        setOpenModalStaff(false);

        break;
      case 2:
        setOpenModalCharacters(true);
        setOpenModalTrailer(false);
        setOpenModalStaff(false);

        break;
      case 3:
        setOpenModalStaff(true);
        setOpenModalTrailer(false);
        setOpenModalCharacters(false);

        break;
    }
  };

  const handleCloseModal = (numModal: number) => {
    switch (numModal) {
      case 1:
        setOpenModalTrailer(false);
        break;
      case 2:
        setOpenModalCharacters(false);
        break;
      case 3:
        setOpenModalStaff(false);
        break;
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
      {openModalTrailer && (
        <ModalContainer>
          <ModalButton onClick={() => handleCloseModal(1)}>X</ModalButton>
          <Trailer>
            <a href={anime?.trailer.url}>{anime?.trailer.url}</a>
          </Trailer>
        </ModalContainer>
      )}
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
              charactersList?.data.map((character, index) => {
                return <CharacterList key={index} characters={character} />;
              })}
          </Characters>
        </ModalContainer>
      )}
      {openModalStaff && (
        <ModalContainer>
          <ModalButton
            onClick={() => handleCloseModal(3)}
            className="close-button"
          >
            X
          </ModalButton>
          <Characters>
            {Array.isArray(charactersList?.data) &&
              charactersList?.data.map((character, index) => {
                return <CharacterList key={index} characters={character} />;
              })}
          </Characters>
        </ModalContainer>
      )}
    </AnimeContainer>
  );
};
