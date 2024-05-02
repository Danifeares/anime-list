export type AboutAnime = {
  mal_id: string;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  episodes: number;
  status: string;
  synopsis: string;
  type: string;
  rating: string;
  year: number;
};

export interface IAboutAnime {
  data?: AboutAnime;
}
