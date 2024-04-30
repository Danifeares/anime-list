export type AboutAnime = {
  mal_id: number;
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
  type: "TV";
  episodes: number;
  status: string;
};

export interface IAboutAnimes {
  data?: AboutAnime[];
}
