import { AnimeList } from "../../components/AnimeList";
import { StyledBox } from "./style";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const Home = () => {

  const animes: string[] = ['anime1', 'anime2', 'anime3', 'anime4', 'anime5','anime6', 'anime1', 'anime2', 'anime3', 'anime4', 'anime5','anime6'];

  return (
    <StyledBox>
      <div>
        <h1>Top Animes</h1>
        <span>Ver Mais {<KeyboardDoubleArrowRightIcon />}</span>
      </div>
      <ul>
        {animes.map((anime, i) => (
          <AnimeList
            key={i}
            anime={anime}
          />
        ))}
      </ul>
    </StyledBox>
  )
}