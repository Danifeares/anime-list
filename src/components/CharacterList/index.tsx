import React, { useState } from "react";
import { CharactersList } from "../../interfaces/ICharactersList";
import {
  CharacterImg,
  CharactersItem,
  CharacterName,
  ModalIsOpen,
  CharacterImgContainer,
} from "./styles";
import { CharacterModal } from "./CharacterModal";

interface Props {
  characters?: CharactersList;
}

export const CharacterList: React.FC<Props> = ({ characters }) => {
  const [characterDetailModal, setCharacterDetailModal] = useState(false);

  if (!characters) {
    return null;
  }

  const { character } = characters;

  const characterData = character || {};

  return (
    <>
      <CharactersItem>
        <CharacterImgContainer onClick={() => setCharacterDetailModal(true)}>
          <CharacterImg
            src={characterData.images?.jpg?.image_url || ""}
            alt={characterData.name || ""}
          />
          <div>Ver mais</div>
        </CharacterImgContainer>
        <CharacterName>{characterData.name || ""}</CharacterName>
      </CharactersItem>
      {characterDetailModal && (
        <ModalIsOpen>
          {characterDetailModal && (
            <CharacterModal
              character={characters}
              setCharacterDetailModal={setCharacterDetailModal}
            />
          )}
        </ModalIsOpen>
      )}
    </>
  );
};
