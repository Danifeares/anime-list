export type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export type Pagination = {
  last_visible_page: number,
  has_next_page: boolean,
  current_page: number,
  items: {
    count: number,
    total: number,
    per_page: number
  }
}

export interface ITopAnimes {
  data?: Anime[]
  pagination?: Pagination
}