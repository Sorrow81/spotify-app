import {Track} from "./track.model";

export class Album {
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  tracks: Track[];
}
