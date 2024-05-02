export type StaffList = {
  person: {
    mal_id: number;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
};

export interface IStaffList {
  data?: StaffList;
}
