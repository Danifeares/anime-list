import React from "react";
import { CharactersList } from "../../interfaces/ICharactersList";
import { CharacterImg, CharactersItem, CharacternName } from "./styles";

interface Props {
  characters?: CharactersList;
}

export const CharacterList: React.FC<Props> = ({ characters }) => {
  if (!characters) {
    return null;
  }

  const { character } = characters;

  const characterData = character || {};

  return (
    <CharactersItem>
      <CharacterImg
        src={characterData.images?.jpg?.image_url || ""}
        alt={characterData.name || ""}
      />
      <CharacternName>{characterData.name || ""}</CharacternName>
    </CharactersItem>
  );
};
