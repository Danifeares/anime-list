import { CharactersList } from "../../../interfaces/ICharactersList"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { http } from "../../../http"
import { ModalChar } from "./styles";
import { IChar } from "../../../interfaces/IChar";

interface Props {
  character?: CharactersList;
  setCharacterDetailModal: Dispatch<SetStateAction<boolean>>;
}

export const CharacterModal: React.FC<Props> = ({ character, setCharacterDetailModal }) => {
  const [charDetail, setCharDetail] = useState<IChar>({});

  useEffect(() => {
    if (character) {
      http.get(`characters/${character.character.mal_id}`)
        .then((res) => setCharDetail(res.data))
        .catch((error) => console.error("Erro ao pesquisar personagem:", error));
    }
  }, [character]);

  return (
    <ModalChar>
      <span onClick={() => setCharacterDetailModal(false)}>x</span>
      <img src={charDetail.data?.images.jpg.image_url} />
      <h3>{charDetail.data?.name}</h3>
      <p>{charDetail.data?.about}</p>
    </ModalChar>
  )
}