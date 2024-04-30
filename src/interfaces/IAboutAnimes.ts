export type AboutAnime = {
  mal_id: string;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  trailer: string;
  title: string;
  episodes: number;
  status: string;
  synopsis: string;
};

export interface IAboutAnime {
  data?: AboutAnime;
}
