import { useUser } from "../../hooks/UserContext";
import {
  List,
  ListImage,
  ListItem,
  Title,
  ListAnimeTitle,
  AnimesList,
  Button,
} from "./styles";

export const UserList = () => {
  const { user, setUser } = useUser();

  const removeAnime = (id: string) => {
    if (!user) return;

    const updatedFavoriteAnimes = user?.favoriteAnimes.filter(
      (anime) => anime.id != id
    );

    setUser({ ...user, favoriteAnimes: updatedFavoriteAnimes });
  };

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
              <Button onClick={() => removeAnime(anime.id)}>X</Button>
            </ListItem>
          ))}
      </List>
    </AnimesList>
  );
};
