export type AboutAnime = {
  mal_id: string;
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
  title: string;
  episodes: number;
  status: string;
  synopsis: string;
};

export interface IAboutAnime {
  data?: AboutAnime;
}
