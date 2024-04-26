import React from "react"
import { IAnime } from "../../interfaces/IAnime"
import { ContainerImg, ListItem } from "./styles"

export const AnimeList:React.FC<IAnime> = ({ anime }) => {
  return (
    <ListItem>
      <ContainerImg>
        <img src="https://cdn.myanimelist.net/images/anime/1565/142711.jpg" />
        <div>Ver mais</div>
      </ContainerImg>
      <span>{anime}</span>
    </ListItem>
  )
}