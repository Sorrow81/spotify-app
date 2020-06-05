import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../service/album.service';
import {Track} from "../models/track.model";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  title: string;
  tracks: Track[];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    return this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(data => {
        this.title = data['name'];
        this.tracks = data['tracks']['items'];
      });
  }
}
