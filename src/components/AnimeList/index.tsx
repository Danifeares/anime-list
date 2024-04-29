import React from "react"
import { ContainerImg, ListItem } from "./styles"
import { Anime } from "../../interfaces/ITopAnimes"

interface Props {
  anime: Anime;
}

export const AnimeList: React.FC<Props> = ({ anime }) => {
  return (
    <ListItem>
      <ContainerImg>
        <img src={anime.images.jpg.image_url} alt={anime.title} />
        <div>Ver mais</div>
      </ContainerImg>
      <span>{anime.title}</span>
    </ListItem>
  )
}