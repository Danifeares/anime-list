export type CharactersList = {
  character: {
    mal_id: number;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  role: string;
};

export interface ICharactersList {
  data: CharactersList;
}
