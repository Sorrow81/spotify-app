import {Album} from "./album.model";

export class Search {
  albums: {
    href: string;
    items: Album[];
  };
}
