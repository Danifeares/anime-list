import { useUser } from "../../hooks/UserContext";
import {
  List,
  ListImage,
  ListItem,
  Title,
  ListAnimeTitle,
  AnimesList,
} from "./styles";

export const UserList = () => {
  const { user } = useUser();

  return (
    <AnimesList>
      <Title>{user?.name} List</Title>
      <List>
        {user?.favoriteAnimes &&
          user.favoriteAnimes.map((anime, index) => (
            <ListItem key={index}>
              <p>#{index < 10 ? "0" + index : index}</p>
              <ListImage src={anime.image} alt={anime.name} />
              <ListAnimeTitle>{anime.name}</ListAnimeTitle>
            </ListItem>
          ))}
      </List>
    </AnimesList>
  );
};
