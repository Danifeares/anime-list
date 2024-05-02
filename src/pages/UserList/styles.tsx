import styled from "styled-components";

export const AnimesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  text-transform: uppercase;
`;

export const List = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 15px;
`;

export const ListImage = styled.img`
  width: 40px;
`;

export const ListAnimeTitle = styled.p`
  font-size: 20px;
`;
