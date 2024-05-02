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
  AnimeInfo,
  AnimeInformations,
} from "./styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { CharacterList } from "../CharacterList";
import { http } from "../../http";
import { useNavigate, useParams } from "react-router-dom";
import { ICharactersList } from "../../interfaces/ICharactersList";
import ReactPlayer from "react-player";
import { IStaffList } from "../../interfaces/IStaffList";
import { Staff } from "../StaffList";
import { useUser } from "../../hooks/UserContext";

interface Props {
  anime?: AboutAnime;
}

export const AnimeDetails: React.FC<Props> = ({ anime }) => {
  const [openModalTrailer, setOpenModalTrailer] = useState(false);
  const [openModalCharters, setOpenModalCharacters] = useState(false);
  const [openModalStaff, setOpenModalStaff] = useState(false);

  const [charactersList, setCharactersList] = useState<ICharactersList>();
  const [staffList, setStaffList] = useState<IStaffList>();

  const { user, setUser } = useUser();

  const navigate = useNavigate();
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

  useEffect(() => {
    http
      .get(`/anime/${params.id}/staff`)
      .then((res) => {
        setStaffList(res.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar staff:", error);
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

  const handleAddAnimeFavorite = (
    animeId: string,
    animeImg: string,
    animeName: string
  ) => {
    if (!user) {
      navigate("/signup");
    } else {
      const newAnime = { id: animeId, image: animeImg, name: animeName };

      const storedUser = localStorage.getItem("user");
      const storedUserObject = storedUser ? JSON.parse(storedUser) : null;

      const updatedUser = {
        ...storedUserObject,
        favoriteAnimes: [...(storedUserObject?.favoriteAnimes || []), newAnime],
      };

      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AnimeContainer>
      <AnimeHead>
        <AnimeImageAndButton>
          <AnimeImage src={anime?.images.jpg.image_url} />
          <AnimeButton
            onClick={() =>
              anime?.mal_id &&
              handleAddAnimeFavorite(
                anime.mal_id,
                anime.images.jpg.image_url,
                anime.title
              )
            }
          >
            Favorite
            <FavoriteIcon fontSize="small" />
          </AnimeButton>
        </AnimeImageAndButton>
        <AnimeTitleAndSinops>
          <AnimeTitle>{anime?.title}</AnimeTitle>
          <AnimeSynops>{anime?.synopsis}</AnimeSynops>
          <AnimeInfo>
            <AnimeInformations>Release Year: {anime?.year}</AnimeInformations>
            <p>|</p>
            <AnimeInformations>
              Status:
              {anime?.status == null ? "There are no status" : anime?.status}
            </AnimeInformations>
            <p>|</p>
            <AnimeInformations>
              Episodes:
              {anime?.episodes == null
                ? "There are no episodes"
                : anime?.episodes}
            </AnimeInformations>
            <p>|</p>
            <AnimeInformations>
              Rating:
              {anime?.rating == null ? "There are no rating" : anime?.rating}
            </AnimeInformations>
          </AnimeInfo>
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
            {anime && anime.trailer ? (
              <ReactPlayer url={anime.trailer.url} controls={true} />
            ) : (
              <div>Anime sem trailer</div>
            )}
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
            {Array.isArray(staffList?.data) &&
              staffList?.data.map((staff, index) => {
                return <Staff key={index} staff={staff} />;
              })}
          </Characters>
        </ModalContainer>
      )}
    </AnimeContainer>
  );
};
