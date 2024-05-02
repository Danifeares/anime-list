export interface IChar {
  data?: {
    about: string;
    favorites: number;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
    mal_id: number;
  }
}