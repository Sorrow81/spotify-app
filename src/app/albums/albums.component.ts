import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../service/album.service';
import {Album} from "../models/album.model";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    return this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(data => {
        this.albums = data['tracks']['items'];
      });
  }
}
