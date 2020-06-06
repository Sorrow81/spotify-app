import {Track} from "./track.model";
import {Artist} from "./artist.model";
import {Image} from "./image.model";

export class Album {
  id: string;
  name: string;
  artists: Artist[];
  images: Image[];
  release_date: string;
  total_tracks: number;
  tracks: {
    href: string;
    items: Track[];
  };
}
