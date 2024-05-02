import React from "react"
import { ContainerImg, ListItem } from "./styles"
import { Anime } from "../../interfaces/ITopAnimes"

interface Props {
  anime: Anime;
  onClick: () => void;
}

export const AnimeList: React.FC<Props> = ({ anime, onClick }) => {
  return (
    <ListItem>
      <ContainerImg onClick={onClick}>
        <img src={anime.images.jpg.image_url} alt={anime.title} />
        <div>Ver mais</div>
      </ContainerImg>
      <span>{anime.title}</span>
    </ListItem>
  )
}