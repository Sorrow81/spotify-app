import {Artist} from "./artist.model";

export class Album {
  id: string;
  name: string;
  duration_ms: number;
  preview_url: string;
  external_urls: string;
  artists: Artist[];
}
